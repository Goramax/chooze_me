<template>
  <main>
    <div class="main-container">
      <div class="main-content">
        <div
          class="contact-container"
          :class="{ 'mobile-hidden': !!selectedContact }"
        >
          <h1>Mes messages</h1>
          <div class="contacts">
            <div
              v-for="contact in contacts"
              :key="contact.id"
              @click="selectContact(contact)"
              class="contact"
              :data-id="contact.id"
              :class="{ selected: selectedContact === contact }"
            >
              <img
                :src="contact.avatar"
                alt="avatar"
                class="avatar"
                width="60"
                height="60"
              />
              <div class="name-infos">
                <span>{{ contact.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="messages-container"
          :class="{ 'mobile-hidden': !selectedContact }"
        >
          <div class="mobile-header" v-if="selectedContact">
            <img
              :src="selectedContact?.avatar"
              alt="avatar"
              class="avatar"
              width="64"
              height="64"
            />
            <span class="contact-name">{{ selectedContact?.name }}</span>
            <span class="return-arrow" @click="selectedContact = null">
              <IconArrowLeft />
            </span>
          </div>
          <div class="messages-box" :class="{ 'no-select': !selectedContact }">
            <div class="select-contact-txt" v-if="!selectedContact">
              Sélectionnez un contact
            </div>
            <div
              v-if="!!selectedContact"
              v-for="message in messages"
              :key="message.id"
              class="message-line"
            >
              <div class="message" :class="{ mine: message.sender === 1 }">
                <div class="message-content">{{ message.content }}</div>
              </div>
            </div>
          </div>
          <div class="message-input" v-if="!!selectedContact">
            <form @submit="send">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Écrire un message"
                  v-model="message"
                />
              </div>
              <button type="submit">
                <span class="mobile-hidden">Envoyer</span><IconSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;
  display: flex;
  flex-direction: column;
  .main-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  .main-content {
    display: flex;
    height: 100%;
    min-height: 100%;
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.contact-container {
  width: 40vw;
  height: max-content;
  min-height: 100%;
  background-color: white;
  border-right: 1px solid rgba($color-grey-light, 0.4);
  padding: 0 20px 0 20px;
  @media (max-width: $media-md) {
    width: 100%;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .contact {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 10px;
      border-radius: 8px;
      position: relative;
      cursor: pointer;
      &.selected {
        background-color: $color-primary;
        color: white;
      }
      &:not(.selected) {
        ::after {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: $color-font-primary;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      .avatar {
        border-radius: 50%;
      }
    }
  }
}
.messages-container {
  padding: 0 40px 0 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .messages-box {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    position: relative;
    &.no-select {
      margin-bottom: auto;
    }
    .select-contact-txt {
      text-align: center;
      font-size: $font-l;
      color: $color-font-primary;
    }
  }
  @media (max-width: $media-md) {
    padding: 0 20px 0 20px;
  }
  .message-line {
    display: flex;
    .message {
      margin-bottom: 20px;
      margin-top: 20px;
      border-radius: 8px;
      padding: 20px;
      &.mine {
        background-color: $color-primary;
        color: white;
        margin-left: auto;
      }
      &:not(.mine) {
        margin-right: auto;
        border: 1px solid $color-font-primary;
      }
    }
  }
}

.message-input {
  gap: 20px;
  padding: 20px;
  @media (max-width: $media-md) {
    padding: 20px 0;
  }
  form {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    .form-group {
      flex: 1;
      margin: 0;
      width: 100%;
    }
    button {
      width: auto;
      padding-left: 40px;
      padding-right: 40px;
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        width: 20px;
        height: 20px;
        :deep(path) {
          stroke: white;
        }
      }
      @media (max-width: $media-md) {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
}

.mobile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .avatar {
    border-radius: 50%;
    margin-top: 20px;
  }
  .contact-name {
    margin-top: 10px;
    font-size: $font-l;
    font-weight: 700;
  }
  .return-arrow {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 2;
    :deep(svg) {
      path {
        stroke: $color-primary;
      }
    }
  }
  @media (min-width: $media-md) {
    display: none;
  }
}

.mobile-hidden {
  @media (max-width: $media-md) {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconSend from "@/components/icons/IconSend.vue";
import ImageAvatar from "@/assets/imgs/user.webp";
import ImageUser from "@/assets/imgs/warren.png";

let contacts = ref([]) as any;
let messages = ref([]) as any;
let selectedContact = ref(null) as any;

let message = ref("");

onMounted(() => {
  contacts.value = [
    {
      id: 1,
      name: "Wade Warren",
      avatar: ImageAvatar,
    },
    {
      id: 2,
      name: "John Doe",
      avatar: ImageUser,
    },
  ];
  messages.value = [
    {
      id: 1,
      sender: 2,
      content: "Bonjour, ton profil m’intéresse. Serait-il possible d’organiser un rendez-vous vendredi prochain à 8h00?",
      date: new Date(),
    },
    {
      id: 2,
      sender: 1,
      content: "Merci pour votre réponse, avec plaisir !",
      date: new Date(),
    },
  ];
});

const selectContact = (contact: any) => {
  selectedContact.value = contact;
  // fetch messages
  setTimeout(() => {
    const messagesBox = document.querySelector(".messages-box");
    if (messagesBox) {
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }
  }, 100);

};

const send = (e: Event) => {
  e.preventDefault();
  if (message.value) {
    messages.value.push({
      id: messages.value.length + 1,
      sender: 1,
      content: message.value,
      date: new Date(),
    });
    message.value = "";
    
    setTimeout(() => {
      const messagesBox = document.querySelector(".messages-box");
      if (messagesBox) {
        messagesBox.scrollTop = messagesBox.scrollHeight;
      }
    }, 100);

  }
};
</script>
