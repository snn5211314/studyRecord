<template>
  <div class="flex-direction">
    <div class="result-box">
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> flex-direction：row </div>
          <div class="warp row">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-condition"> flex-direction：row-reverse </div>
          <div class="warp row-reverse">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </div>
      </div>
      <div class="result-column">
        <div class="result-item">
          <div class="result-condition"> flex-direction：column </div>
          <div class="warp column">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </div>
        <div class="result-item">
          <div class="result-condition"> flex-direction：column-reverse </div>
          <div class="warp column-reverse">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
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

    }
  }
}
</script>

<style scoped lang="scss">
  .flex-direction {
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
          .result-condition {

          }
          .row {
            flex-direction: row;
          }
          .row-reverse {
            flex-direction: row-reverse;
          }
          .column {
            flex-direction: column;
          }
          .column-reverse {
            flex-direction: column-reverse;
          }
        }
      }
    }
  }
</style>