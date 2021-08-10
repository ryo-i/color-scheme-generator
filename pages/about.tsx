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


const Img = styled.img`
    width: 100%;
    box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
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
        <main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>使い方</h2>
                <section>
                    <h3>このアプリの特徴</h3>
                    <ul>
                        <li>カラーピッカーからも色を設定でき、結果はHexの6桁が表示されます</li>
                        <li>メインカラーは色相(H)、彩度(S)、明度(B)で変更できます</li>
                        <li>アクセントカラーはメインカラーに対する補色で、表色系により位置が変わります</li>
                        <li>ベースカラーはメインカラーとのコントラストによって0-99%は薄く、101-200%は濃くなります</li>
                    </ul>
                    <figure><Img src="img/initial.jpg" alt="初期画面" /></figure>
                </section>
                <section>
                    <h3>カラーピッカー</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
                    <h3>メインカラー</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
                    <h3>アクセントカラー</h3>
                    <p>説明説明説明説明説明説明説明説明</p>
                </section>
                <section>
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
        </main>
        <Footer />
        </>
    );
}

export default About;