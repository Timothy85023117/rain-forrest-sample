# rain-forest-project

### VSCode 設定

安裝 EditorConfig for VS Code

> 或者直接修改 VSCode 設定
> File > Preferences > Settings > Files: Eol > 設為 LF(\n)

---

## Node.js 使用版本

### 建議使用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node.js 版本

\>= 18.6.0

---

## NPM 使用版本

\>= 8.13.2

---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

---

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

Load ".env.production" for build

```sh
npm run build
```

---

## 函式、屬性註解使用 JSDoc 格式

### https://docs.microsoft.com/zh-tw/visualstudio/ide/create-jsdoc-comments-for-javascript-intellisense

| JSDoc 標記     | 語法                           | 備註                                                           |
| -------------- | ------------------------------ | -------------------------------------------------------------- |
| `@deprecated`  | `@deprecated` 描述             | 指定取代函式或方法。                                           |
| `@description` | `@description` 描述            | 指定函式或方法的描述。                                         |
| `@export`      | `@export` moduleName           | 指定函式或方法的輸出模組名稱。                                 |
| `@param`       | `@param` {類型} 參數名稱描述   | 指定函式或方法中之參數的資訊。 TypeScript 也支援 `@paramTag`。 |
| `@property`    | `@property` {類型} 屬性名稱    | 指定欄位或物件上所定義成員的資訊，包括描述。                   |
| `@returns`     | `@returns` {類型}              | 指定傳回值。                                                   |
| `@summary`     | `@summary` 描述                | 指定函式或方法的描述 (與 `@description` 相同)。                |
| `@type`        | `@type` {類型}                 | 指定常數或變數的類型。                                         |
| `@typedef`     | `@typedef` {類型} 自訂類型名稱 | 指定自訂類型。                                                 |

```javascript
/** @description Determines the area of a circle that has the specified radius parameter.
 * @param {number} radius The radius of the circle
 * @return {number}
 */
function getArea(radius) {
  var areaVal;
  areaVal = Math.PI * radius * radius;
  return areaVal;
}
```

---

## 專案結構

- public/ : 靜態資源檔案，會在執行 build 之後將檔案複製到輸出資料夾
- src/ : 主要原始程式碼
- src/api/models/ : api 相關資料模型定義
- src/assets/ : 靜態資產檔案，可能是圖片、字型檔…等，會透過 vite 打包讀取之檔案
- src/components/ : 共用 vue 組件
- src/composables/ : 共用狀態邏輯的函式
- src/constants/ : 常數設定
- src/enums/ : 列舉設定
- src/models/ : 程式中使用的資料模型定義
- src/plugins/ : 自訂 vue plugin
- src/router/ : vue 路由設定
- src/service/ : 專案上共用的函式
- src/stores/ : pinia 套件全域儲存狀態資料之程式碼
- src/typings/ : typescript 定義檔
- src/utils/ : 共用函式工具
- src/views/ : vue 頁面組件

### 路徑別名

專案設定路徑 @/ 等同於 ./src/，因此 import 時可使用 @/ 縮短路徑，例: import { useApplicationStore } from "@/stores/application";

---

## 檔案命名規則

- \*.vue 使用大駝峰式命名法(upper camel case)，例: HelloWorld.vue
- \*.ts 使用 kebab case，例: hello-world.ts
- \*.scss 使用 kebab case，例: hello-world.scss；若非主要樣式檔(可能是變數、函式、mixin)，前方加上底線，例: \_variables.scss
- assets 檔案使用 kebab case，例 hello-world.jpg

---

## 樣式命名規則

- 使用 BEM 命名規則，參考資料 http://getbem.com/introduction/
- 自訂全域樣式程式位置: src/assets/scss/main.scss
- \*.vue 檔案內的 style 一律使用 scss + scoped 設定，例: \<style scoped lang=\"scss\"\>\<\/style\>

---

## 程式命名規則

啟用 ESLint 工具輔助進行基本的檢查，所有 ESLint 的警告與錯誤都應進行修復。以下補充說明特定程式應遵守之規定。

### src/api/\*.ts

- 依據功能分類，並於檔名加上 -service 後綴，例: sample-service.ts
- 主要提供呼叫 api 之函式，呼叫 api 一律使用 http.ts

### src/api/models/\*.req.ts

- api 請求資料模型定義，檔名一律加上 .req 後綴
- 一個檔案只定義一個資料模型
- 檔名需對應實際 interface 名稱，例: get-sample-user.req.ts → interface GetSampleUserReq {}

### src/api/models/\*.res.ts

- api 回覆資料模型定義，檔名一律加上 .res 後綴
- 一個檔案只定義一個資料模型
- 檔名需對應實際 interface 名稱，例: get-sample-user.res.ts → interface GetSampleUserRes {}

### src/composables/\*.ts

- 共用狀態邏輯的函式
- 一個檔案只定義一個函式
- 導出函式名稱需加上 use 前綴，例: mouse.ts → export function useMouse() {}

### src/constants/index.ts

- 常數設定，由於數量可能不會太多目前規畫單檔設定(index.ts)
- 變數使用 upper snake case 方式命名，例: SAMPLE_SETTING

### src/enums/\*.ts

- 列舉可用於增加程式閱讀性及減少維護難度
- 檔名需對應實際 enum 名稱，例: sample-type-enum.ts → export enum SampleTypeEnum {}
- 一個檔案原則上只定義一個列舉，能擴充中文的對應，例：同一隻 sample-type-enum.ts 檔案，可使其同使有 SampleTypeEnum 及其中文對應擴充 SampleTypeZhEnum

### src/models/\*.ts

- 程式中使用的資料模型定義
- 一個檔案只定義一個資料模型
- 檔名需對應實際 interface 名稱，例: sample-user.ts → interface SampleUser {}

### src/plugins/\*.ts

- 一個檔案只定義一個 plugin
- 自訂 plugin 時必需加入 typescript 定義
- [參考資料](https://vuejs.org/guide/reusability/plugins.html)

### src/typings/\*.d.ts

- typescript 定義檔
- 增/減全域 components 時，需於 global-components.d.ts 維護該組件的定義描述
- 增/減路由 meta 時，需於 router-meta.d.ts 維護 meta 的定義描述

### src/utils/\*.ts

- 共用函式工具程式，依據功能分類
- 檔名一律加上 -helper 後綴，例: sample-helper.ts
- 所有函式必需加上 JSDoc 註解，方便開發人員理解如何使用

### src/service/\*.ts

- 放專案業務邏輯用的函式
- 呼叫 service function，需用：`service.{serviceName}.{functionName}` 的方式去指定

### src/views/\*.ts

- 頁面組件，檔名一律加上 View 後綴，例: SSOLoginView.vue
- 使用 code snippets 功能，輸入 "template typescript setup" 按下 tab 自動產生程式碼
- 組件內程式順序: template → script → style
- 一律使用 Composition API 開發 vue 組件

---

## 環境變數設定說明

- 目前設置環境變數包含 development(本機開發)、dev、sit、uat、production，可視狀況自行增減變數與環境
- development(本機開發) 啟動指令 npm run dev，套用 .env 設定
- typescript 定義檔為 env.d.ts，若有變數增減需至該檔案調整
- 自訂環境變數名稱需加上 VITE\_ 前綴，並使用 upper snake case 設定變數名稱，例: VITE_MODE=development
- [參考資料](https://vitejs.dev/guide/env-and-mode.html)

---

## 第三方套件

### 日期時間

- [date-and-time](https://github.com/knowledgecode/date-and-time)

### 表單驗證

- [VeeValidate](https://vee-validate.logaretm.com/v4/)
- [jquense/yup](https://github.com/jquense/yup)
