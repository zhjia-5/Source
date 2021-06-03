<template>
  <div id="comment-container" class="comment-container">
    <form class="fromData" @submit.prevent="handleSubmit(formData)">
      <!-- 用户名输入 -->
      <div class="nickname">
        <input
          :class="{ redBoreder: nicknameEmpty }"
          type="text"
          maxlength="10"
          placeholder="用户昵称"
          v-model="formData.nickname"
        />
        <span>{{ formData.nickname.length }}/10</span>
      </div>
      <Transition name="error">
        <div class="error" v-show="nicknameEmpty">请输入昵称!</div>
      </Transition>
      <!-- 评论内容 -->
      <div class="content">
        <textarea
          :class="{ redBoreder: contentEmpty }"
          maxlength="300"
          rows="4"
          cols="80"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span>{{ formData.content.length }}/300</span>
      </div>
      <Transition name="error">
        <div class="error" v-show="contentEmpty">请输入内容!</div>
      </Transition>
      <button
        type="submit"
        :class="{ disable: !isDisable }"
        :disabled="!isDisable"
      >
        {{ isDisable ? "提 交" : "提 交 中 ..." }}
      </button>
    </form>
    <!-- 评论 -->
    <div class="comment">
      <h3 class="title">{{ title }}</h3>
      <span class="number">({{ commentCount }})</span>
      <ul>
        <li v-for="item in list" :key="item.id">
          <Avatar :width="50" :height="50" :url="item.avatar" />
          <div class="data">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="createTime">
              {{ formatDate(item.createDate, true) }}
            </div>
            <div class="content">{{ item.content }}</div>
          </div>
        </li>
      </ul>
      <div class="loading-div"><Loading v-if="isLoading" /></div>
    </div>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
import Loading from "@/components/Loading";
export default {
  components: {
    Avatar,
    Loading,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      nicknameEmpty: false,
      contentEmpty: false,
      isDisable: true,
    };
  },
  methods: {
    formatDate,
    async handleSubmit() {
      this.nicknameEmpty = this.formData.nickname === "";
      this.contentEmpty = this.formData.content === "";
      // 如果有数据才抛出事件
      if (this.formData.nickname && this.formData.content) {
        this.isDisable = false;
        // 向父组件抛出提交事件，传递评论内容，callback函数再父组件调用，再此处执行
        this.$emit("submit", this.formData, () => {
          this.isDisable = true;
          this.formData.content = "";
        });
      } else {
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.comment-container {
  padding: 1em;
  .fromData {
    .nickname {
      position: relative;
      width: 50%;
      height: 2rem;
      line-height: 2em;
      input {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border: 1px dotted @gray;
        text-indent: 0.5em;
        outline: none;
        font-size: 1rem;
        &:focus {
          border: 1px dotted darken(@gray, 100%);
        }
      }
      span {
        position: absolute;
        right: 0.5em;
        color: @gray;
      }
    }
    .content {
      position: relative;
      width: 100%;
      margin-top: 0.5em;
      textarea {
        width: 100%;
        box-sizing: border-box;
        resize: none;
        border: 1px dotted @gray;
        outline: none;
        padding: 0.8em;
        font-size: 1rem;
        &:focus {
          border: 1px dotted darken(@gray, 100%);
        }
      }
      span {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
        color: @gray;
      }
    }
    .error {
      width: 50%;
      height: 1rem;
      line-height: 1rem;
      color: @warn;
      margin: 0.5rem;
      font-size: 0.8rem;
    }
    .redBoreder {
      border: 1px solid red !important;
    }
    .error-enter-active,
    .error-leave-active {
      transition: opacity 1s;
    }
    .error-enter,
    .error-leave-to {
      opacity: 0;
    }
    button {
      padding: 0.5rem 2rem;
      border: none;
      color: #fff;
      background: @primary;
      border-radius: 3px;
      cursor: pointer;
      font-size: 1rem;
      &:active {
        transform: scale(0.95);
        background: lighten(@primary, 10%);
      }
    }
    .disable {
      background: lighten(@primary, 10%);
      cursor: not-allowed;
    }
  }
  .comment {
    position: relative;
    ul {
      list-style: none;
      padding: 0;
    }
    .title {
      display: inline-block;
      margin-right: 0.5em;
    }
    // 头像
    .avatar-container {
      display: inline-block;
      margin-right: 1em;
    }
    li {
      position: relative;
      display: flex;
      padding: 1.5em 0;
      border-bottom: 1px solid lighten(@gray, 20%);
      .data {
        font-size: 0.9rem;
        .nickname {
          color: @success;
          display: inline-block;
          font-size: 1.1rem;
          margin-bottom: 0.3em;
        }
        .createTime {
          position: absolute;
          right: 1em;
          font-size: 1em;
          color: @gray;
          display: inline-block;
          letter-spacing: 0;
        }
      }
    }
    .loading-div {
      position: relative;
      width: 100%;
      height: 100px;
      text-align: center;
      line-height: 40px;
    }
  }
}
@media screen and (max-width: 600px) {
  .comment-container {
    overflow:hidden ;
    .fromData {
      .nickname {
        width: 100%;
      }
    }
    .avatar-container {
      margin-right: 0.5em !important;
    }
    .comment {
      .data{
        .nickname{
        font-size: 1.3em !important;
      }
      }
      .content {
        font-size: 1.2em;
      }
    }
  }
}
</style>