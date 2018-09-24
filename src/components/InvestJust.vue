<template>
  <div class="investjust-content">


    <el-row class="investjust-row" type="flex" justify="center" align="middle" style="margin-top: 50px;">
      <el-col :span="4">
      </el-col>
      <el-col :span="6">
        <div class="investjust-reserve-panel-up">
          <div class="investjust-reserve-amount">EOS Reserve</div>
        </div>
        <div class="investjust-reserve-panel-down">
          <div class="investjust-reserve-amount">12273.0062 EOS</div>
        </div>
      </el-col>
      <el-col :span="4" justify="center" align="middle">
      </el-col>
      <el-col :span="6">
        <div class="investjust-reserve-panel-up">
          <div class="investjust-reserve-amount">JUST Reserve</div>
        </div>
        <div class="investjust-reserve-panel-down">
          <div class="investjust-reserve-amount">714304.8726 JUST</div>
        </div>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle" style="margin-top: 20px;">
      <el-col :span="8">
        <div class="investjust-supply-text">supply ratio</div>
      </el-col>
      <el-col :span="8" justify="center" align="middle">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="10" status="success"></el-progress>
      </el-col>
      <el-col :span="8">
        <img style="width: 50px;" src="https://static.eos.io/images/Landing/SectionTokenSale/eos_spinning_logo.gif"
             alt="">
      </el-col>
    </el-row>

    <el-row class="investjust-row" type="flex" justify="center" :gutter="20">
      <el-col :span="8">
        <el-input v-model="buyjustprice" :disabled="true">
          <template slot="prepend">Price</template>
          <template slot="append">EOS</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="selljustprice" :disabled="true">
          <template slot="prepend">Price</template>
          <template slot="append">EOS</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="investjust-row" type="flex" justify="center" :gutter="20">
      <el-col :span="8">
        <label class="p3d-green">Available: 1000.7120 EOS </label>
      </el-col>
      <el-col :span="8">
        <label class="p3d-green">Available: 1000.7120 JUST </label>
      </el-col>
    </el-row>
    <el-row class="investjust-row" style="margin-top: 10px;" type="flex" justify="center" :gutter="20">
      <el-col :span="8">
        <el-input type="number" :step="1" placeholder="" v-model="input3">
          <template slot="append">EOS</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input type="number" :step="1" placeholder="" v-model="input3">
          <template slot="append">JUST</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row class="investjust-row" type="flex" justify="center" :gutter="20">
      <el-col :span="8">
        <mu-button full-width color="success" @click="btnBuyJust">BUY JUST</mu-button>
      </el-col>
      <el-col :span="8">
        <mu-button full-width color="error">SELL JUST</mu-button>
      </el-col>
    </el-row>
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
        let postobj = new Object();
        postobj.table = "accounts";
        postobj.code = "eosio.token";
        postobj.scope = "liyunhan1111";
        postobj.json = "true";
        let postdata = JSON.stringify(postobj);
        axios.post('http://api.eosnewyork.io/v1/chain/get_table_rows', postdata)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      btnSellJust() {

      }
    }
  }
</script>

<style scoped>
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
