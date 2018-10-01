<template>
  <div class="investjust-content investjust-bg">

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'InvestJust',
    data() {
      return {
        buyjustprice: "0.0168",
        selljustprice: "0.0168",
      }
    },
    created() {

    },
    methods: {
      btnBuyJust() {

      },
      btnSellJust() {

      }
    }
  }
</script>

<style scoped>

  .investjust-bg {
    background-image: url("../assets/invest_bg.jpg");
    background-repeat:no-repeat;
    background-size:100% auto;-moz-background-size:100% auto;
    width: 100%;
    height: 1000px;

  }

  .investjust-row {
    margin-top: 20px;
  }

  .investjust-card {
    margin: 15px 45px;
    background-color: transparent;
    border-color: transparent;
  }

  .investjust-reserve-panel-up {
    text-align: center;
    width: 100%;
    height: 70px;
    background: #8e71c7;
    color: #fff;
    border-radius: .4rem .4rem 0 0;
  }

  .investjust-reserve-panel-down {
    text-align: center;
    width: 100%;
    height: 70px;
    background: #4caf50;
    color: #fff;
    border-radius: 0 0 .4rem .4rem;
  }

  .investjust-reserve-amount {
    position: relative;
    font-size: 1.8em;
    font-weight: bold;
    top: 30%;
  }

  .investjust-supply-text {
    font-size: 1em;
    font-weight: bold;
    text-align: right;
    padding-right: 30px;
    color: #fff;
  }

  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    color: white;
  }
</style>
