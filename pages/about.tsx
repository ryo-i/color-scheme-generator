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
        margin: 0 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 20px;
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
                        <li>カラーバーの面積比率はメインカラー(25%)、アクセントカラー (5%)、ベースカラー(70%)</li>
                        <li>カラーピッカーから色を変更すると他の2色も相関して変更されます</li>
                        <li>メインカラーは色相(H)、彩度(S)、明度(B)で変更できます</li>
                        <li>アクセントカラーはメインカラーに対する補色で、表色系により位置が変わります</li>
                        <li>ベースカラーはメインカラーをコントラスト0-99%は薄く、101-200%は濃くした色です</li>
                    </ul>
                    <figure><img src="img/initial.jpg" alt="初期画面" /></figure>
                </section>
                <section id="color_picker">
                    <h3>カラーピッカー</h3>
                    <p>カラーバーの下のパレットまたはHex値を押すとカラーピッカーが開きます。</p>
                    <p>下記の画面はPCのChromeブラウザで一つ目のメインカラーのカラーパレットを開いた画面です（なお、カラーピッカーの形状はブラウザによって異なります）。</p>
                    <figure>
                        <img src="img/cp01.jpg" alt="メインカラーのカラーピッカー" />
                    </figure>
                    <p>メインカラーのカラーピッカーを変更すると、アクセントカラー、ベースカラーも相関して変わります。</p>
                    <p>下記の図ではメインカラーの彩度(S)、明度(B)を変更したため、他の色の彩度(S)、明度(B)も変わっています</p>
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
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section id="accent_color">
                    <h3>アクセントカラー</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section id="base_color">
                    <h3>ベースカラー</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
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