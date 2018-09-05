<template>
  <div class="investjust-content">

    <el-card class="box-card investjust-card">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <h2></h2>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <mu-button class="p3d-green" flat full-width style="height: 50px; font-size: 1.5rem">
            Total Dividend 10000.0000
            <img style="width: 50px;" src="https://static.eos.io/images/Landing/SectionTokenSale/eos_spinning_logo.gif"
                 alt="">
          </mu-button>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card investjust-card">
      <el-row class="investjust-row" type="flex" justify="center" :gutter="20">
        <el-col :span="10">
          <el-input v-model="buyjustprice" :disabled="true">
            <template slot="prepend">Price</template>
            <template slot="append">EOS</template>
          </el-input>
        </el-col>
        <el-col :span="10">
          <el-input v-model="selljustprice" :disabled="true">
            <template slot="prepend">Price</template>
            <template slot="append">EOS</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="investjust-row" type="flex" justify="center" :gutter="20">
        <el-col :span="10">
          <label class="p3d-green">Available: 1000.7120 EOS </label>
        </el-col>
        <el-col :span="10">
          <label class="p3d-green">Available: 1000.7120 JUST </label>
        </el-col>
      </el-row>
      <el-row class="investjust-row" style="margin-top: 10px;" type="flex" justify="center" :gutter="20">
        <el-col :span="10">
          <el-input type="number" :step="1" placeholder="" v-model="input3">
            <template slot="append">EOS</template>
          </el-input>
        </el-col>
        <el-col :span="10">
          <el-input type="number" :step="1" placeholder="" v-model="input3">
            <template slot="append">JUST</template>
          </el-input>
        </el-col>
      </el-row>

      <el-row class="investjust-row" type="flex" justify="center" :gutter="20">
        <el-col :span="10">
          <mu-button full-width color="success">BUY JUST</mu-button>
        </el-col>
        <el-col :span="10">
          <mu-button full-width color="error">SELL JUST</mu-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
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
      btnLogin() {

      },
      btnAction() {

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

  .p3d-green {
    text-shadow: rgb(43, 0, 43) 0px 0px 5px, rgb(0, 204, 0) 0px 0px 20px, rgb(0, 255, 0) 0px 0px 10px;
    color: white;
  }
</style>
