import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = 'メインカラー、アクセントカラー、ベースカラーの3色を設定できる配色ジェネレーターです。';
const headTitle = pageTitle + ' | ' + headerTitle;


const Main = styled.main`
    section {

    }
    h2 {
        background: #eee;
        margin: 60px 0 0;
        padding: 10px;
        border-radius: 3px;
    }
    h3 {
        margin: 40px 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 30px;
        img {
            width: 100%;
            box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
        }
    }
`;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <Main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>使い方</h2>
                <section id="content">
                    <h3>目次</h3>
                    <ul>
                        <li><a href="#feature">このアプリの特徴</a></li>
                        <li><a href="#color_picker">カラーピッカー</a></li>
                        <li><a href="#main_color">メインカラー</a></li>
                        <li><a href="#accent_color">アクセントカラー</a></li>
                        <li><a href="#base_color">ベースカラー</a></li>
                    </ul>
                </section>
                <section id="feature">
                    <h3>このアプリの特徴</h3>
                    <ul>
                        <li>カラーバーの面積比はメインカラー(25%)、アクセントカラー (5%)、ベースカラー(70%)</li>
                        <li>カラーピッカーから色を変更すると他の2色も相関して変更されます</li>
                        <li>メインカラーは色相(H)、彩度(S)、明度(B)で変更できます</li>
                        <li>アクセントカラーはメインカラーに対する補色で、表色系により位置が変わります</li>
                        <li>ベースカラーはメインカラーをコントラスト0-99%は薄く、101-200%は濃くした色です</li>
                    </ul>
                    <figure><img src="img/initial.jpg" alt="初期画面" /></figure>
                    <p>メインカラー(25%)、アクセントカラー (5%)、ベースカラー(70%)の面積比についてはこちらを参照。</p>
                    <p>※参考：<a href="https://www.i-ryo.com/entry/2019/02/28/215606">【配色の基本】面積比（メイン、アクセント、ベース）と色相分割【Adobe Color CC】</a></p>
                </section>
                <section id="color_picker">
                    <h3>カラーピッカー</h3>
                    <p>カラーバーの下のパレットまたはHex値を押すとカラーピッカーが開きます。</p>
                    <figure><img src="img/cp00.jpg" alt="初期画面" /></figure>
                    <p>下記の画面はPCのChromeブラウザで一つ目のメインカラーのカラーパレットを開いた画面です（なお、カラーピッカーの形状はブラウザによって異なります）。</p>
                    <figure><img src="img/cp01.jpg" alt="メインカラーのカラーピッカー" /></figure>
                    <p>メインカラーのカラーピッカーを変更すると、アクセントカラー、ベースカラーも相関して変わります。メインカラーの彩度(S)、明度(B)を変更したため、他の色の彩度(S)、明度(B)も変わっています。</p>
                    <figure><img src="img/cp02.jpg" alt="メインカラーの彩度、明度を変更" /></figure>
                    <p>メインカラーの色相(H)を変更すると他の色の色相(H)も変わります。</p>
                    <figure><img src="img/cp03.jpg" alt="メインカラーの色相を変更" /></figure>
                    <p>下記の図は二つ目のアクセントカラーを開いたところ</p>
                    <figure><img src="img/cp04.jpg" alt="アクセントカラーのピッカーを開く" /></figure>
                    <p>アクセントカラーの彩度(S)、明度(B)を変更すると他の色の彩度(S)、明度(B)も変わります</p>
                    <figure><img src="img/cp05.jpg" alt="アクセントカラーの彩度、明度を変更" /></figure>
                    <p>アクセントカラーの色相(H)を変更すると他の色の色相(H)も変わります</p>
                    <figure><img src="img/cp06.jpg" alt="アクセントカラーの色相を変更" /></figure>
                    <p>下記の図は三つ目のベースカラーを開いたところ</p>
                    <figure><img src="img/cp07.jpg" alt="ベースカラーの色相を変更" /></figure>
                    <p>ベースカラーの彩度(S)、明度(B)を変更すると他の色の彩度(S)、明度(B)も変わります（この時、メインカラーとのコントラストの位置関係を超える場合はコントラストが変わります）。</p>
                    <figure><img src="img/cp08.jpg" alt="ベースカラーの彩度、明度を変更" /></figure>
                    <p>ベースカラーの色相(H)を変更すると他の色の色相(H)も変わります</p>
                    <figure><img src="img/cp09.jpg" alt="ベースカラーの色相を変更" /></figure>
                </section>
                <section id="main_color">
                    <h3>メインカラー</h3>
                    <p>メインカラーは色相(H)、彩度(S)、明度(B)を変更できます。初期値は色相(H)が0、彩度(S)と明度(B)が90です。</p>
                    <figure><img src="img/mc00.jpg" alt="初期画面" /></figure>
                    <p>色相(H)を変更（0〜360の範囲）。アクセントカラーの色相(H)も相関して変わります。</p>
                    <figure><img src="img/mc01.jpg" alt="メインカラーの色相(H)を変更" /></figure>
                    <p>彩度(S)を変更（0〜100の範囲）。最初の色より薄くなります。アクセントカラーとベースカラーの彩度(S)も相関して変わります。</p>
                    <figure><img src="img/mc02.jpg" alt="メインカラーの彩度(S)を変更" /></figure>
                    <p>明度(B)を変更（0〜100の範囲）。最初の色より暗くなります。アクセントカラーとベースカラーの明度(B)も相関して変わります。</p>
                    <figure><img src="img/mc03.jpg" alt="メインカラーの明度(B)を変更" /></figure>
                </section>
                <section id="accent_color">
                    <h3>アクセントカラー</h3>
                    <p>アクセントカラーはメインカラーの補色。補色の色相(H)の値は表色系によって異なります。表色系についてはこちらを参照。</p>
                    <p>※参考：<a href="https://www.i-ryo.com/entry/2019/02/24/211711">【配色】色相環のH値をいろいろ測ってみた（HSB、マンセル、オストワルト、PCCS、Web配色ツール</a></p>
                    <p>当アプリの表色系の初期設定は「イッテン表色系」でメインカラーの色相(H)に対してアクセントカラーの色相(H)は118。</p>
                    <figure><img src="img/ac00.jpg" alt="初期画面" /></figure>
                    <p>イッテン標識系の色相環。ここにあるキーカラー「橙」の色相(H)は22、補色「青」の色相(H)は214</p>
                    <figure><img src="img/ac_itten.jpg" alt="イッテン表色系の色相環" /></figure>
                    <p>メインカラーの色相(H)を22にするとアクセントカラーの色相(H)は214（キーカラー以外の色相も中間値を計算して割り出されます）</p>
                    <figure><img src="img/ac01.jpg" alt="イッテン表色系の補色" /></figure>
                    <p>アクセントカラーをマンセル表色系に変更するとマンセル表式系の補色で計算され、色相(H)が197になります。</p>
                    <figure><img src="img/ac02.jpg" alt="マンセル表色系の補色" /></figure>
                    <p>なお、一つ目のHSB表色系はメインカラーの180度反対なので、色相(H)が202になります。</p>
                    <figure><img src="img/ac03.jpg" alt="HSB表色系の補色" /></figure>
                </section>
                <section id="base_color">
                    <h3>ベースカラー</h3>
                    <p>ベースカラーはメインカラーと同じ色相(H)でコントラストの比率によって彩度(S)と明度(B)が変わります。</p>
                    <p>コントラストの初期値は-90%でメインカラーより薄い色になっています。</p>
                    <figure><img src="img/bc00.jpg" alt="初期画面" /></figure>
                    <p>コントラストを-100%にするとベースカラーは真っ白になります（彩度(S)が0、明度(B)が100）。</p>
                    <figure><img src="img/bc01.jpg" alt="ベースカラーのコントラストを-100%に" /></figure>
                    <p>コントラストを上げていくごとにベースカラーの色はメインカラーに近づいていきます（彩度(S)が上がり、明度(B)が下がる）。</p>
                    <figure><img src="img/bc02.jpg" alt="ベースカラーのコントラストを上げる" /></figure>
                    <p>コントラストが0%だと彩度(S)と明度(B)がメインカラーと同じになります。</p>
                    <figure><img src="img/bc03.jpg" alt="ベースカラーのコントラストを0%に" /></figure>
                    <p>コントラストをさらに上げていくとベースカラーがメインカラーよりも濃くなります（彩度(S)が上がり、明度(B)が下がる）。</p>
                    <figure><img src="img/bc04.jpg" alt="ベースカラーのコントラストをさらに上げる" /></figure>
                    <p>コントラストを100%にするとベースカラーは真っ黒になります（彩度(S)が100、明度(B)が0）。</p>
                    <figure><img src="img/bc05.jpg" alt="ベースカラーのコントラストを100%に" /></figure>
                </section>
            </section>
            <section>
                <h2>詳細</h2>
                <section>
                    <h3>ブログ</h3>
                    <p><a href="https://www.i-ryo.com/entry/xxxx">タイトル - クモのようにコツコツと</a></p>
                </section>
                <section>
                    <h3>ソースコード（GitHub）</h3>
                    <p><a href="https://github.com/ryo-i/color-scheme-generator">リポジトリ</a></p>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;