<template>
  <div class="lightspeed layer">
    <VIcon
      :class="{ 'is-active': active }"
      image="lightspeed"
      dir="icons"
      dimension="32"
      @click="toggleLightSpeed"/>
    <p
      v-show="active"
      :class="{ 'is-typing': isTyping }"
      v-text="message"/>
  </div>
</template>

<script>
import messages from "@/data/messages";
import VIcon from "@/components/utils/VIcon";

export default {
  name: "LightSpeedScroll",

  components: { VIcon },

  data() {
    return {
      light: 0.03,
      duration: 20000,
      start: 0,
      end: undefined,
      offset: 0,
      active: false,
      index: 0,
      message: "",
      wordIdx: 0,
      isAdding: true,
      isTyping: false,
      timer: undefined,
      messages
    };
  },

  computed: {
    typingComplete() {
      return this.wordIdx > this.messages[this.index].length;
    },

    typingSpeed() {
      return this.isAdding ? 120 : 60;
    },

    lastMsg() {
      return this.messages.length === this.index + 1;
    }
  },

  created() {
    this.emitter.on("scroll", () => this.toggleLightSpeed());
    this.emitter.on("stopLightScroll", () => this.resetParams());
  },

  methods: {
    toggleLightSpeed() {
      if (!this.active) {
        this.active = true;

        this.typing();
        this.scrollToBottom();
      } else {
        this.resetParams();
      }
    },

    typing() {
      this.timer = setTimeout(() => {
        this.getLetter();

        this.isTyping = true;
        this.isAdding ? this.addLetter() : this.removeLetter();
      }, this.typingSpeed);
    },

    addLetter() {
      if (this.typingComplete) {
        this.isAdding = false;
        this.isTyping = false;

        if (!this.lastMsg) setTimeout(() => this.typing(), 2000);
      } else {
        this.wordIdx++;
        this.typing();
      }
    },

    removeLetter() {
      if (this.wordIdx === 0) {
        this.isAdding = true;
        this.index = (this.index + 1) % this.messages.length;
      } else {
        this.wordIdx--;
      }

      this.typing();
    },

    getLetter() {
      this.message = this.messages[this.index].slice(0, this.wordIdx);
    },

    resetParams() {
      this.active = false;
      this.index = 0;
      this.wordIdx = 0;
      this.message = "";

      clearTimeout(this.timer);
    },

    scrollToBottom() {
      this.offset = window.pageYOffset;
      this.start = this.getTime();
      this.end = document.body.scrollHeight - window.innerHeight;
      this.duration = (this.end - this.offset) / this.light;

      if (!("requestAnimationFrame" in window)) window.scroll(0, this.end);

      this.scroll();
    },

    scroll() {
      if (!this.active) return;

      const now = this.getTime();
      const time = Math.min(1, (now - this.start) / this.duration);
      const speed = Math.ceil(time * (this.end - this.offset) + this.offset);

      window.scroll(0, speed);

      if (this.end === speed) return;

      requestAnimationFrame(this.scroll);
    },

    getTime() {
      return "now" in window.performance
        ? performance.now()
        : new Date().getTime();
    }
  }
};
</script>

<style lang="scss">
.lightspeed:not(.image) {
  align-items: center;
  bottom: $spacing-large;
  display: flex;
  font-family: B612, serif;
  left: 3.5em;

  p {
    animation: blink 1s step-end infinite;
    border-right: $white;
    border-right-style: solid;
    border-right-width: 3px;
    padding-right: 0.1em;

    &.is-typing {
      animation: none;
    }
  }

  .image {
    margin-right: 0;

    &.is-active {
      margin-right: $spacing-small;
    }

    &.is-active,
    &:hover {
      color: white;
      opacity: 1;
    }
  }
}

@keyframes blink {
  0%,
  100% {
    border-right-color: $white;
  }
  50% {
    border-right-color: transparent;
  }
}
</style>
