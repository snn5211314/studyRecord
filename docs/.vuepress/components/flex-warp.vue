<template>
  <div class="flex-warp">
    <div class="result-box">
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> flex-warp：warp </div>
          <div class="warp wrap">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-condition"> flex-warp：warp-reverse </div>
          <div class="warp wrap-reverse">
            <div class="item" v-for="item in divs" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> flex-warp：nowarp </div>
          <div class="warp nowrap">
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
      divs: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }
}
</script>

<style scoped lang="scss">
  .flex-warp {
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
          .wrap {
            flex-wrap: wrap;
          }
          .wrap-reverse {
            flex-wrap: wrap-reverse;
          }
          .nowrap {
            flex-wrap: nowrap;
          }
        }
      }
    }
  }
</style>