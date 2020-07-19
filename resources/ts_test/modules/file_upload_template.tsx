// ファイルアップロードのテンプレート;
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import FileUpload from './file_upload';

// {
//   props.map((data: string) => {});
// }
type Props = {
    select: number;
};

const FileUploadTemplate = (props: any) => {
    // 別に切り分けたい。後でリファクタリング
    // const [datas, setData] = useState([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('/api/file_upload');
    //       const items = response.data;
    //       console.log(response.data);
    //       setData(items);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   fetchData();
    // }, []);

    return (
        <Form.Row>
            <Col md="4">
                <Form.Label>{props.title}</Form.Label>
            </Col>
            <Col md="8">
                <FileUpload source={props.source} />
            </Col>
        </Form.Row>
    );
};

export default FileUploadTemplate;
