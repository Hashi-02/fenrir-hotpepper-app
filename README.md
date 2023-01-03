# GPS グルメリサーチ

アプリを試す=>https://fenrir-hotpepper-app.vercel.app/
<img src="https://github.com/Hashi-02/fenrir-hotpepper-app/blob/develop/public/images/fenrir-hotpepper-app.PC.png" alt="PC版Demo画像" title="PC版Demo画像">

## 概要

現在地付近のレストランなどの情報を素早く検索することができます。リストから各店舗を選択して詳細を見ることもできます。

## バージョン

- npm: 8.15.0
- node: 16.17.0
- react: 18.2.0
- next.js : 13.1.1

## 開始方法

1. リポジトリのクローン

```bash
$ git clone https://github.com/Hashi-02/fenrir-hotpepper-app
```

2. リポジトリに移動する

```bash
$ cd fenrir-hotpepper-app
```

3. パッケージなどをインストールする

```bash
$ npm install
```

4. `.env`ファイルをルートディレクトに作成し、取得した API key 追加する

```shell
API_URL_ROOT=http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=[HOTPEPPERAPIKEY]
GOOGLE_MAP_API_KEY=[GOOGLEMAPAPIKEY]
```

ホットペッパー API Key の取得=> https://webservice.recruit.co.jp/register/  
GooleMapAPI Key の取得=> https://developers.google.com/maps

5. アプリを起動する

```bash
$ npm run build
$ npm run start
```
