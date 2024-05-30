<template>
  <div class="wrap-min-height">
    <div class="flex items-center justify-between mt-2">
      <!-- 日期 -->
      <div class="demo-date-picker">
        <div class="block">
          <el-form-item>
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              start-placeholder="Start date"
              end-placeholder="End date"
              :default-time="defaultTime"
            />
          </el-form-item>
        </div>
      </div>
      <!-- 資料時間 -->
      <div class="text-mark">
        <span class="mr-1 text-color-primary-gray">資料時間</span
        ><span class="text-color-primary-gray">2024/05/31 00:00~23:59</span>
      </div>
    </div>
    <section class="mt-8">
      <div class="text-title text-color-primary-gray mb-4">狀態概覽</div>
      <div class="grid gap-x-4 grid-cols-4">
        <div class="state-card state-notprocess">
          <div class="text-title text-color-primary-gray">未處理</div>
          <div class="text-pop-title">32</div>
        </div>
        <div class="state-card state-process">
          <div class="text-title text-color-primary-gray">已回覆</div>
          <div class="text-pop-title">68</div>
        </div>
        <div class="state-card state-finished">
          <div class="text-title text-color-primary-gray">已結案</div>
          <div class="text-pop-title">9999+</div>
        </div>
        <div class="state-card state-timeouts">
          <div class="text-title text-color-primary-gray">處理時效提醒</div>
          <div class="text-pop-title">12</div>
        </div>
      </div>
    </section>
    <section class="mt-8">
      <div class="flex w-full items-stretch">
        <div class="data-box w-3/5 mr-5">
          <div class="text-title text-color-primary-gray mb-4">
            單位未處理狀況
          </div>
          <div class="card">
            <div class="text-right data-select">
              <el-select
                v-model="value"
                placeholder="Select"
                size="large"
                style="width: 120px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>

            <div class="table-data-wrapper">
              <!-- <ChartsComponent /> -->
            </div>
          </div>
        </div>
        <div class="data-box w-2/5">
          <div class="text-title text-color-primary-gray mb-4">
            單位狀況概覽
          </div>
          <div class="card">
            <div class="state-table">
              <div class="table-head flex">
                <div class="cell cell-name"></div>
                <div class="cell cell-notprocess">未處理</div>
                <div class="cell cell-processed">已回覆</div>
                <div class="cell cell-finish">已結案</div>
                <div class="cell cell-notice">處理時效警示</div>
              </div>
              <div class="table-body">
                <div class="body-row flex">
                  <div class="cell cell-name">品牌經營A組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
                <div class="body-row flex">
                  <div class="cell cell-name">品牌經營B組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
                <div class="body-row flex">
                  <div class="cell cell-name">品牌經營C組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
                <div class="body-row flex">
                  <div class="cell cell-name">品牌經營Ｄ組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
                <div class="body-row flex">
                  <div class="cell cell-name">客戶服務組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
                <div class="body-row flex">
                  <div class="cell cell-name">倉儲物流管理組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
                <div class="body-row flex">
                  <div class="cell cell-name">帳務組</div>
                  <div class="cell cell-notprocess">20</div>
                  <div class="cell cell-processed">30</div>
                  <div class="cell cell-finish">60</div>
                  <div class="cell cell-notice">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8">
      <div class="text-title text-color-primary-gray mb-4">案件來源平台</div>
      <div class="card flex">
        <div class="table-data-wrapper"></div>
        <div class="table-detail-wrapper platform-table">
          <div class="grid gap-3 grid-cols-2 table-head">
            <div class="cell cell-name">平台</div>
            <div class="cell">案件數</div>
          </div>
          <div class="table-body">
            <div class="grid gap-3 grid-cols-2 table-row">
              <div class="cell cell-name">shopee</div>
              <div class="cell">150</div>
            </div>
            <div class="grid gap-3 grid-cols-2 table-row">
              <div class="cell cell-name">PChome</div>
              <div class="cell">120</div>
            </div>
            <div class="grid gap-3 grid-cols-2 table-row is-active">
              <div class="cell cell-name">MOMO</div>
              <div class="cell">87</div>
            </div>
          </div>
          <div class="table-footer">
            <div class="grid gap-3 grid-cols-2 table-row">
              <div class="cell cell-name">加總</div>
              <div class="cell">357</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8">
      <div class="grid gap-5 grid-cols-3">
        <div class="data-box">
          <div class="text-title text-color-primary-gray mb-4">案件分類</div>
          <div class="card">123</div>
        </div>
        <div class="data-box">
          <div class="text-title text-color-primary-gray mb-4">分類項目</div>
          <div class="card">123</div>
        </div>
        <div class="data-box">
          <div class="text-title text-color-primary-gray mb-4">單位佔比%</div>
          <div class="card grid gap-3 grid-cols-2">
            <div class="unit-pie"></div>
            <div class="unit-table">
              <div class="table-row grid gap-3 grid-cols-2">
                <div class="cell cell-name">客戶服務組</div>
                <div class="cell">45%</div>
              </div>
              <div class="table-row grid gap-3 grid-cols-2">
                <div class="cell cell-name">品牌經營C組</div>
                <div class="cell">30%</div>
              </div>
              <div class="table-row grid gap-3 grid-cols-2">
                <div class="cell cell-name">品牌經營A組</div>
                <div class="cell">20%</div>
              </div>
              <div class="table-row grid gap-3 grid-cols-2">
                <div class="cell cell-name">其他</div>
                <div class="cell">5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// import ChartsComponent from "@/components/highcharts/ChartsComponent.vue";

const dateValue = ref("");
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
]);

const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
<style lang="scss" scoped>
.card {
  padding: 16px 24px;
}

.state-card {
  position: relative;
  z-index: 0;
  border-radius: 12px;
  padding: 10px 28px;
  background-color: $color-gray-600;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    width: 100px;
    height: 100px;
  }
}

.state {
  &-notprocess {
    background: linear-gradient(
      to right,
      rgb(255 255 255 / 100%) 0%,
      rgb(225 225 225 / 100%) 100%
    );

    &::before {
      background: url("/src/assets/images/Ic-NotProcess.svg") center no-repeat;
      background-size: contain;
    }
  }

  &-process {
    background: linear-gradient(
      to right,
      rgb(232 251 255 / 100%) 20%,
      rgb(174 221 255 / 100%) 100%
    );

    &::before {
      background: url("/src/assets/images/Ic-Processed.svg") center no-repeat;
      background-size: contain;
    }
  }

  &-finished {
    background: linear-gradient(
      to right,
      rgb(222 255 200 / 100%) 12%,
      rgb(147 241 85 / 100%) 100%
    );

    &::before {
      background: url("/src/assets/images/Ic-Finish.svg") center no-repeat;
      background-size: contain;
    }
  }

  &-timeouts {
    background: linear-gradient(
      to right,
      rgb(255 235 164 / 100%) 0%,
      rgb(255 162 162 / 100%) 100%
    );

    &::before {
      background: url("/src/assets/images/Ic-Notice.svg") center no-repeat;
      background-size: contain;
    }
  }
}

.data-select {
  margin-bottom: 10px;
}

.state-table {
  font-size: 12px;
  font-weight: 500;
  text-align: center;

  .cell {
    width: calc((100% - 88px) / 4);
  }

  .cell-name {
    width: 88px;
    text-align: right;
  }
}

.table-head {
  border-bottom: 1px solid $color-gray-700;

  .cell {
    color: $color-gray-800;
    padding: 4px 0 5px;
    font-weight: normal;
  }
}

.body-row {
  border-bottom: 1px solid $color-gray-100;

  .cell-name {
    color: $color-gray-800;
    font-weight: normal;
  }

  .cell {
    padding: 8px 0;
  }
}

.table-data-wrapper {
  padding: 5px;
  background-color: aqua;
  width: 100%;
}

.table-detail-wrapper {
  flex: 1 0 auto;
  margin-left: 50px;
  width: 218px;
}

.platform-table {
  font-size: 12px;
  font-weight: 500;
  text-align: center;

  .table-head {
    color: $color-gray-800;
    font-weight: normal;
    border-bottom: 1px solid $color-gray-700;

    .cell {
      padding: 4px 0;
    }
  }

  .table-body {
    height: 174px;
    overflow-y: auto;
  }

  .table-footer {
    border-top: 1px solid $color-gray-700;

    .table-row {
      border-bottom: none;
    }
  }

  .cell {
    padding: 8px 0;

    & + .cell {
      margin-left: 12px;
    }
  }
}

.unit-pie {
  width: 120px;
}

.unit-table {
  max-width: 168px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  font-weight: bold;

  .table-row {
    padding: 8px 0;
  }
}

.cell-name {
  color: $color-gray-800;
  font-weight: normal;
}

.table-row {
  border-bottom: 1px solid $color-gray-100;

  &.is-active {
    background-color: $color-gray-100;
  }
}
</style>
