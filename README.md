## 	&#9312;制作サイトのタイトル：
### StockSearchApp

## &#9313;制作サイトの説明（40文字程度）：
### バックエンドをdjango、フロントエンドをreactを使って開発しました。フロントエンドのreactでは、ログイン機能はfirebase auth、株式名称を入力しsearchボタンを押すと、バックエンド側に株式名称と表示期間をPOSTして、バックエンドのdjangoは、株式名称をmysqlのstockというテーブルに問い合わせ証券コードを入手する。入手した証券コードをもとに、yhoo finance APIをたたいて、株価のデータをpandasデーターで引っ張ってきて、jsonで返すAPIサーバーとして動作しています。
[バックエンド側のソースコード](https://github.com/TatsuyaFukunaga/stock-search "stock search app")


## &#9314;工夫した点・こだわった点：
### 証券コードのデータベースは、東京証券取引所からxslファイルをダウンロードして、そのデータをpythonで読み取り、mysqlに登録しました。
[証券コード](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

[データベース登録プログラム](https://github.com/TatsuyaFukunaga/python "database")
## &#9315;難しかった点・次回トライしたこと（または機能）：
### 次回pythonを使ったデータ分析にトライしたい。

## &#9316;備考（感想、シェアしたいこと等なんでも）：
### 