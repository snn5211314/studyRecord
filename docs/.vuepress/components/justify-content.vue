<template>
  <div class="justify-content">
    <div class="result-box">
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> justify-content：flex-start </div>
          <div class="warp flex-start">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-condition"> justify-content：flex-end </div>
          <div class="warp flex-end">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> justify-content：center </div>
          <div class="warp center">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-condition"> justify-content：space-between </div>
          <div class="warp space-between">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> justify-content：space-around </div>
          <div class="warp space-around">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      divs: [1,2,3]
    }
  }
}
</script>

<style scoped lang="scss">
  .justify-content {
    .warp {
      display: flex;
      width: 100%;
      border: 1px solid #333;
      .item {
        width: 40px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin: 5px;
        background: #e5e9f2;
        border: 1px solid #333;
      }
    }
    .result-box {
      display: flex;
      flex-direction: column;
      .result-column {
        display: flex;
        .result-item {
          width: 50%;
          padding: 20px;
          .flex-start {
            justify-content: flex-start;
          }
          .flex-end {
            justify-content: flex-end;
          }
          .center {
            justify-content: center;
          }
          .space-between {
            justify-content: space-between;
          }
          .space-around {
            justify-content: space-around;
          }
        }
      }
    }
  }
</style>