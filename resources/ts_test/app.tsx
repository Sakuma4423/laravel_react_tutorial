// bootstrap
import bootstrap from './modules/bootstrap';
bootstrap();

//react
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import FileUploadTemplate from './modules/file_upload_template';

const final_review_input = ['本人確認資料', '所得証明', '物件資料'];

const test_person: string[][] = [
    ['0', ''],
    ['1', '免許証'],
    ['2', '保険証'],
    ['3', '住民票'],
];

const test_document: string[][] = [
    ['0', ''],
    ['1', '収集同意書'],
    ['2', '保有同意書'],
    ['3', '利用同意書'],
    ['4', '提供同意書'],
];

const test_certification: string[][] = [
    ['0', ''],
    ['1', '証明A'],
    ['2', '証明B'],
    ['3', '証明C'],
];

type fileUpload = {
    title: string;
    selector: string[][];
    file_src: string;
    file_label: string;
    is_add: boolean;
};

// ファイルセレクタの初期値
const initialState: fileUpload[] = [
    {
        title: '本人確認資料',
        selector: test_person,
        file_src: '',
        file_label: '',
        is_add: true,
    },
    {
        title: '所得証明',
        selector: test_document,
        file_src: '',
        file_label: '',
        is_add: true,
    },
    {
        title: '物件資料',
        selector: test_certification,
        file_src: '',
        file_label: '',
        is_add: true,
    },
];

const test_props = {
    title: '本人確認資料',
    source: test_person,
};

// TODO sakuma 各ページごとに描画するようリファクタリングする
if (document.getElementById('final_review_input_file_upload')) {
    ReactDOM.render(
        <FileUploadTemplate {...test_props} />,
        document.getElementById('final_review_input_file_upload')
    );
}

if (document.getElementById('file_upload')) {
    ReactDOM.render(
        <FileUploadTemplate app_type={final_review_input} />,
        document.getElementById('file_upload')
    );
}
