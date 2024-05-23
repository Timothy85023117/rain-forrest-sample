<template>
  <h1>TYPOGRAPHY</h1>
  <section>
    <h1>H1 大標題 28px</h1>
    <h2>H2 彈窗標題 20px</h2>
    <h3>H3 列表表頭、側選單項目 18px</h3>
    <p class="text-title">一般標題 16px</p>
    <p>一般文字 16px</p>
    <p class="text-subtitle">內文表格標題 14px</p>
    <p class="text-describe">說明文字 14px</p>
    <p class="text-mark">註記文字 14px</p>
  </section>
  <hr />
  <h1>COLOR</h1>
  <section>
    <ul class="color-boxes">
      <li>
        <div class="color-box" style="background-color: #76c144"></div>
        <p class="text-describe">LightGreen-600</p>
        <p class="text-describe">(#76C144)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #93f155"></div>
        <p class="text-describe">LightGreen-500</p>
        <p class="text-describe">(#93F155)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #bae0a1"></div>
        <p class="text-describe">LightGreen-400</p>
        <p class="text-describe">(#BAE0A1)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #e9fcdd"></div>
        <p class="text-describe">LightGreen-100</p>
        <p class="text-describe">(#E9FCDD)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #fbfdf9"></div>
        <p class="text-describe">system-bg</p>
        <p class="text-describe">(#FBFDF9)</p>
      </li>
    </ul>
    <ul class="color-boxes">
      <li>
        <div class="color-box" style="background-color: #666464"></div>
        <p class="text-describe">Gray-800</p>
        <p class="text-describe">(#666464)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #898989"></div>
        <p class="text-describe">Gray-700</p>
        <p class="text-describe">(#898989)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #bfc0c0"></div>
        <p class="text-describe">Gray-600</p>
        <p class="text-describe">(#BFC0C0)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #c8c9c7"></div>
        <p class="text-describe">Gray-500</p>
        <p class="text-describe">(#C8C9C7)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #d9d9d6"></div>
        <p class="text-describe">Gray-400</p>
        <p class="text-describe">(#D9D9D6)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #f4f6f7"></div>
        <p class="text-describe">Gray-100</p>
        <p class="text-describe">(#F4F6F7)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #f6f7f9"></div>
        <p class="text-describe">Gray-50</p>
        <p class="text-describe">(#F6F7F9)</p>
      </li>
    </ul>
    <ul class="color-boxes">
      <li>
        <div class="color-box" style="background-color: #000"></div>
        <p class="text-describe">Black</p>
        <p class="text-describe">(#000000)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #fff"></div>
        <p class="text-describe">White</p>
        <p class="text-describe">(#FFFFFF)</p>
      </li>
    </ul>
    <ul class="color-boxes">
      <li>
        <div class="color-box" style="background-color: #ed704e"></div>
        <p class="text-describe">Orange-500</p>
        <p class="text-describe">(#ED704E)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #f6b7a6"></div>
        <p class="text-describe">Orange-400</p>
        <p class="text-describe">(#F6B7A6)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #ffbe9f"></div>
        <p class="text-describe">Orange-300</p>
        <p class="text-describe">(#FFBE9F)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #fbe2dc"></div>
        <p class="text-describe">Orange-200</p>
        <p class="text-describe">(#FBE2DC)</p>
      </li>
    </ul>
    <ul class="color-boxes">
      <li>
        <div class="color-box" style="background-color: #b5ebee"></div>
        <p class="text-describe">Blue-300</p>
        <p class="text-describe">(#B5EBEE)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #f0feff"></div>
        <p class="text-describe">Blue-100</p>
        <p class="text-describe">(#F0FEFF)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #bdb5ee"></div>
        <p class="text-describe">Purple-300</p>
        <p class="text-describe">(#BDB5EE)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #edca4e"></div>
        <p class="text-describe">Yellow-500</p>
        <p class="text-describe">(#EDCA4E)</p>
      </li>
      <li>
        <div class="color-box" style="background-color: #fbf4dc"></div>
        <p class="text-describe">Yellow-100</p>
        <p class="text-describe">(#FBF4DC)</p>
      </li>
    </ul>
  </section>
  <hr />
  <h1>Input</h1>
  <section>
    <el-form label-position="top">
      <el-form-item label="Title" required>
        <el-input v-model="input" style="width: 100%" />
      </el-form-item>
      <el-form-item label="Title" required>
        <el-input v-model="input" disabled />
      </el-form-item>
      <el-form-item label="Title" class="is-error" required>
        <el-input v-model="input" />
        <div class="el-form-item__error">Error Text</div>
      </el-form-item>
    </el-form>
  </section>
  <hr />
  <h1>Select</h1>
  <section>
    <el-form label-position="top">
      <el-form-item label="Title">
        <el-select v-model="value" placeholder="Select" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <div class="mt-3" />
      <el-form-item label="Title" required>
        <el-select v-model="value" placeholder="Select" size="large" disabled>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <div class="mt-3" />
      <el-form-item label="Title" class="is-error" required>
        <el-select v-model="value" placeholder="Select" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="el-form-item__error">Error Text</div>
      </el-form-item>
      <div class="mt-3" />
      <el-form-item label="Title">
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <div class="mt-3" />
      <el-form-item label="Title" required>
        <el-select v-model="value" placeholder="Select" disabled>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <div class="mt-3" />
      <el-form-item label="Title" class="is-error" required>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="el-form-item__error">Error Text</div>
      </el-form-item>
    </el-form>
  </section>
  <hr />
  <h1>Date</h1>
  <section>
    <el-form label-position="top">
      <div class="demo-date-picker">
        <div class="block">
          <p>Component value：{{ dateValue }}</p>
          <el-form-item label="Title">
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
      <div class="demo-date-picker">
        <div class="block">
          <p>Component value：{{ dateValue }}</p>
          <el-form-item label="Title" required>
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
      <div class="demo-date-picker">
        <div class="block">
          <p>Component value：{{ dateValue }}</p>
          <el-form-item label="Title" required>
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              start-placeholder="Start date"
              end-placeholder="End date"
              :default-time="defaultTime"
              disabled
            />
          </el-form-item>
        </div>
      </div>
      <div class="demo-date-picker">
        <div class="block">
          <p>Component value：{{ dateValue }}</p>
          <el-form-item label="Title" class="is-error">
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
    </el-form>
  </section>
  <hr />
  <h1>Check Box</h1>
  <section>
    <div>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
    </div>
    <div>
      <el-checkbox v-model="checked1" label="Option 1" disabled />
      <el-checkbox v-model="checked2" label="Option 2" disabled />
    </div>
  </section>
  <hr />
  <h1>Radio Button</h1>
  <section>
    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="radio1" class="ml-4">
        <el-radio value="1" size="large">Option 1</el-radio>
        <el-radio value="2" size="large">Option 2</el-radio>
      </el-radio-group>
    </div>
    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="radio1" class="ml-4">
        <el-radio value="1" disabled>Option 1</el-radio>
        <el-radio value="2" disabled>Option 2</el-radio>
      </el-radio-group>
    </div>
  </section>
  <hr />
  <h1>Pagination</h1>
  <section>
    <div class="pagination-block">
      <el-pagination
        v-model:current-page="currentPage2"
        v-model:page-size="pageSize2"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="sizes, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </section>
  <hr />
  <h1>Button</h1>
  <section>
    <div class="flex mb-3">
      <el-button size="large">large Default</el-button>
      <el-button size="large" disabled>large Default</el-button>
    </div>
    <div class="flex mb-3">
      <el-button size="large" type="primary">large Primary</el-button>
      <el-button size="large" type="primary" disabled>large Primary</el-button>
    </div>
    <div class="flex mb-3">
      <el-button size="large" class="notice-button">large notice</el-button>
      <el-button size="large" class="notice-button" disabled
        >large notice</el-button
      >
    </div>
    <div class="flex mb-3">
      <el-button>Default</el-button>
      <el-button disabled>Default</el-button>
    </div>
    <div class="flex mb-3">
      <el-button type="primary">Primary</el-button>
      <el-button type="primary" disabled>Primary</el-button>
    </div>
    <div class="flex mb-3">
      <el-button class="notice-button">large notice</el-button>
      <el-button class="notice-button" disabled>large notice</el-button>
    </div>
  </section>
  <hr />
  <h1>Tab</h1>
  <section>
    <h3>main tabs</h3>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
    <h3>sub tabs</h3>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">
        <template v-slot:label>
          <div class="flex">
            <span>label title</span>
            <div class="tab-badge">1</div>
          </div>
        </template>
        User
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">
        <template v-slot:label>
          <div class="flex">
            <span>label title</span>
            <div class="tab-badge">1</div>
          </div>
        </template>
        Config
      </el-tab-pane>
      <el-tab-pane label="Role" name="third">
        <template v-slot:label>
          <div class="flex">
            <span>label title</span>
            <div class="tab-badge">1</div>
          </div>
        </template>
        Role
      </el-tab-pane>
      <el-tab-pane label="Task" name="fourth">
        <template v-slot:label>
          <div class="flex">
            <span>label title</span>
            <div class="tab-badge">8</div>
          </div>
        </template>
        Task
      </el-tab-pane>
    </el-tabs>
  </section>
  <hr />
  <h1>Tag</h1>
  <section>
    <el-tag type="primary">啟用</el-tag>
  </section>
  <h1>Toast</h1>
  <section>
    <!-- <el-button :plain="true" @click="open1">Message</el-button> -->
    <el-button :plain="true" @click="openSuccess">Success</el-button>
    <el-button :plain="true" @click="openNotice">Notice</el-button>
    <el-button :plain="true" @click="openError">Error</el-button>
  </section>
  <h1>POPUP</h1>
  <section>
    <el-button plain @click="dialogPureTextTitle = true">
      純文字含標題 Dialog（大）
    </el-button>
    <el-button plain @click="dialogSingleFormTitle = true">
      表單(單行) Dialog（大）
    </el-button>
    <el-button plain @click="dialogFormTitle = true">
      表單(多行) Dialog（大）
    </el-button>
    <el-button plain @click="dialogChoseFormTitle = true">
      表單(擇一區塊輸入或選擇) Dialog（大）
    </el-button>
    <el-button plain @click="dialogTable = true"> 表格 Dialog（大） </el-button>
    <el-button plain @click="dialogPureText = true">
      純文字 Dialog（小）
    </el-button>

    <el-dialog v-model="dialogPureTextTitle" title="保存確認">
      <div class="dialog-content">
        <h2 class="text-center">
          如要繼續編輯回覆內容請點選暫存，如確認內容無誤請點選確認。
        </h2>
      </div>
      <template #footer>
        <div class="dialog-footer flex justify-center">
          <el-button
            size="large"
            class="fix-width"
            @click="dialogPureTextTitle = false"
            >取消</el-button
          >
          <el-button
            size="large"
            type="primary"
            class="fix-width"
            @click="dialogPureTextTitle = false"
          >
            確認
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogSingleFormTitle" title="指派">
      <div class="dialog-content">
        <el-form label-position="top" class="grid gap-4 grid-cols-3">
          <el-form-item label="指派單位" class="mb-0">
            <el-select
              v-model="valueSelect"
              filterable
              placeholder="請選擇單位"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="指派單位" class="mb-0">
            <el-select
              v-model="valueSelect1"
              filterable
              placeholder="請選擇人員"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer flex justify-center">
          <el-button
            size="large"
            type="primary"
            class="fix-width"
            @click="dialogSingleFormTitle = false"
          >
            確認
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogFormTitle" title="單位資訊">
      <div class="dialog-content">
        <div class="dialog-content">
          <el-form label-position="top" class="grid gap-4 grid-cols-3">
            <div class="pure-txt-block">
              <div for="" class="pure-txt-block--title">序號</div>
              <div class="pure-txt-block--content">
                <p>1</p>
              </div>
            </div>
            <el-form-item label="指派單位" class="mb-0">
              <el-select
                v-model="valueSelect"
                filterable
                placeholder="請選擇單位"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="指派單位" class="mb-0">
              <el-select
                v-model="valueSelect1"
                filterable
                placeholder="請選擇人員"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="狀態" class="mb-0">
              <el-radio-group v-model="radio1" class="w-full">
                <el-radio value="1" size="large" class="w-1/2 mr-0"
                  >啟用</el-radio
                >
                <el-radio value="2" size="large" class="w-1/2">停用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer flex justify-center">
          <el-button
            size="large"
            class="fix-width"
            @click="dialogFormTitle = false"
            >取消</el-button
          >
          <el-button
            size="large"
            type="primary"
            class="fix-width"
            @click="dialogFormTitle = false"
          >
            確認
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogChoseFormTitle" title="指派">
      <div class="dialog-content">
        <div class="dialog-content--warn-tip mb-4">
          <p>*處理客服或是指派其他單位二擇一</p>
        </div>
        <el-form label-position="top" class="grid gap-4 grid-cols-3">
          <el-form-item label="處理客服" class="mb-0">
            <el-select
              v-model="valueSelect"
              filterable
              placeholder="請選擇客服"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <div class="divider-line">
          <span>或</span>
        </div>
        <el-form label-position="top" class="grid gap-4 grid-cols-3">
          <el-form-item label="指派單位" class="mb-0">
            <el-select
              v-model="valueSelect"
              filterable
              placeholder="請選擇單位"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="指派人員" class="mb-0">
            <el-select
              v-model="valueSelect1"
              filterable
              placeholder="請選擇人員"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer flex justify-center">
          <el-button
            size="large"
            type="primary"
            class="fix-width"
            @click="dialogChoseFormTitle = false"
          >
            確認
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogTable" title="使用者詳細資訊">
      <div class="dialog-content">
        <ul class="table-pure-table">
          <li>
            <div class="table-title">使用者帳號</div>
            <div class="table-content">0256_Tom@rfr.com.tw</div>
          </li>
          <li>
            <div class="table-title">名稱</div>
            <div class="table-content">任海宏 (Tom)</div>
          </li>
          <li>
            <div class="table-title">電子信箱</div>
            <div class="table-content">tom_ren@rainforestretail.com.tw</div>
          </li>
          <li>
            <div class="table-title">角色</div>
            <div class="table-content">系統管理者</div>
          </li>
          <li>
            <div class="table-title">狀態</div>
            <div class="table-content">
              <el-tag type="primary">啟用</el-tag>
            </div>
          </li>
          <li>
            <div class="table-title">建立時間</div>
            <div class="table-content">2024-03-19 11:28</div>
          </li>
          <li>
            <div class="table-title">更新時間</div>
            <div class="table-content">2024-03-19 11:28</div>
          </li>
          <li>
            <div class="table-title">最後登入時間</div>
            <div class="table-content">2024-03-19 11:28</div>
          </li>
        </ul>
      </div>
      <template #footer>
        <div class="dialog-footer flex justify-center">
          <el-button size="large" class="fix-width" @click="dialogTable = false"
            >取消</el-button
          >
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="dialogPureText" class="dialog-sm" title="">
      <div class="dialog-content">
        <h2 class="text-center">確認將案件狀態改為刪除？</h2>
      </div>
      <template #footer>
        <div class="dialog-footer flex justify-center">
          <el-button
            size="large"
            class="fix-width"
            @click="dialogPureText = false"
            >取消</el-button
          >
          <el-button
            size="large"
            type="primary"
            class="fix-width"
            @click="dialogPureText = false"
          >
            確認
          </el-button>
        </div>
      </template>
    </el-dialog>
  </section>
</template>
<script lang="ts">
export default {
  name: "ElementsComponent",
};
</script>
<script setup lang="ts">
import { ref, reactive } from "vue";
import type { TabsPaneContext } from "element-plus";
import { ElMessage } from "element-plus"; //toast

const input = ref("");

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
const valueSelect = ref("");
const valueSelect1 = ref("");
const dateValue = ref("");
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
]);

const checked1 = ref(true);
const checked2 = ref(false);

const radio1 = ref("1");

const currentPage2 = ref(5);
const pageSize2 = ref(100);
const small = ref(false);
const background = ref(true);
const disabled = ref(false);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const openSuccess = () => {
  const messageTitle = "查詢成功";
  const messageContent = "訂單資訊查詢成功";
  const messageStr = `<div><div class="message-title">${messageTitle}</div></div>`;
  const messageStrContent = `<div><div class="message-title">${messageTitle}</div><div class="message-content">${messageContent}</div></div>`;
  ElMessage({
    duration: 0,
    showClose: true,
    dangerouslyUseHTMLString: true,
    message: messageContent.length == 0 ? messageStr : messageStrContent,
    type: "success",
  });
};
const openNotice = () => {
  const messageTitle = "暫存成功";
  const messageContent = "暫存成功";
  const messageStr = `<div><div class="message-title">${messageTitle}</div></div>`;
  const messageStrContent = `<div><div class="message-title">${messageTitle}</div><div class="message-content">${messageContent}</div></div>`;
  ElMessage({
    duration: 0,
    showClose: true,
    dangerouslyUseHTMLString: true,
    message: messageContent.length == 0 ? messageStr : messageStrContent,
    type: "warning",
  });
};
const openError = () => {
  const messageTitle = "查無資料";
  const messageContent = "請嘗試更換條件或自行手動輸入";
  const messageStr = `<div><div class="message-title">${messageTitle}</div></div>`;
  const messageStrContent = `<div><div class="message-title">${messageTitle}</div><div class="message-content">${messageContent}</div></div>`;
  ElMessage({
    duration: 0,
    showClose: true,
    dangerouslyUseHTMLString: true,
    message: messageContent.length == 0 ? messageStr : messageStrContent,
    type: "error",
  });
};

const dialogPureTextTitle = ref(false);
const dialogSingleFormTitle = ref(false);
const dialogFormTitle = ref(false);
const dialogChoseFormTitle = ref(false);
const dialogTable = ref(false);
const dialogPureText = ref(false);
</script>
<style lang="scss" scoped>
/* typography */
h1,
.text-title-large {
  font-size: 28px;
  font-weight: 500;
}

h2,
.text-pop-title {
  font-size: 20px;
  font-weight: 500;
}

h3,
.text-table-title {
  font-size: 18px;
  font-weight: 500;
}

.text-title {
  font-size: 16px;
  font-weight: 500;
}

p,
.text-body {
  font-size: 16px;
  font-weight: 400;
}

.text-subtitle {
  font-size: 14px;
  font-weight: 500;
}

.text-describe {
  font-size: 14px;
  font-weight: 400;
}

.text-mark {
  font-size: 12px;
  font-weight: 400;
}

/* Color */
.bg-color-green600 {
  background-color: #76c144;
}

.bg-color-green500 {
  background-color: #93f155;
}

.bg-color-green400 {
  background-color: #bae0a1;
}

.bg-color-green100 {
  background-color: #e9fcdd;
}

.bg-color-system {
  background-color: #fbfdf9;
}

/* 共同設定 */
:root {
  --el-color-danger: #ed704e;
  --el-color-primary: #76c144;
}

/* demo */
section {
  padding: 16px;
}

.color-boxes {
  padding: 0;
  margin: 0 0 10px;
  list-style: none;
  display: flex;
}

.color-boxes li {
  margin: 5px;
}

.color-box {
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
</style>
