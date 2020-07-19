// ファイルアップロード;
import React, { useState, useCallback, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FileSelect from './file_select';

const FileUpload = (props: any) => {
  const [src, setSrc] = useState('');
  const [InputNal, setInputVal] = useState('');
  const [uploader, setUploader] = useState('');
  // const [uploader, setUploader] = useState('');

  /**
   * ファイル選択（プレビュー表示）
   * @param e
   */
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
  };

  /**
   * ファイル削除
   */
  const handleDelete = () => {
    setSrc('');
  };

  /**
   * ファイルアップロード
   */
  const handleUpload = () => {};

  /**
   * 入力項目追加
   */
  const handleAdd = () => {};

  return (
    <>
      <Form.Row>
        <Col md="12">
          <Form.Group>
            <InputGroup>
              <FileSelect source={props.source} />
              <Form>
                <Form.File
                  label="ファイル選択…"
                  data-browse="参照"
                  custom
                  onChange={handleFileSelect}
                />
              </Form>
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleDelete}>
                  取消
                </Button>
                <Button variant="outline-secondary" onClick={handleUpload}>
                  アップロード
                </Button>
              </InputGroup.Append>
              <div className="ml-3"></div>
              <Button variant="outline-dark" onClick={handleAdd}>
                追加
              </Button>
            </InputGroup>
            {/* プレビュー画像 */}
            {src && (
              <div className="d-inline-block mr-1 mt-1">
                <img className="img-thumbnail h-50" src={src} />
              </div>
            )}
            {/* ローディング画像 */}
            {
              <div className="loading d-none">
                <div className="spinner-border" role="status"></div>
                <span></span>
              </div>
            }
          </Form.Group>
        </Col>
      </Form.Row>
      {uploader}
    </>
  );
};

export default FileUpload;

// $(() => {
//   /***************************
//    * EventListener
//    **************************/
//   $('.custom-file-input').on('change', e => {
//     handleFileSelect(e);
//   });

//   $('.reset').on('click', e => {
//     handleFileReset(e);
//   });

//   $('.upload').on('click', e => {
//     handleFileUpload(e);
//   });

//   $('.add').on('click', e => {
//     handleAddFileUploadItem(e);
//   });

//   $('.delete').on('click', e => {
//     handleDeleteFileUploadItem(e);
//   });

//   /***************************
//    * EventHandler
//    **************************/
//   /**
//    * ファイル選択時にプレビュー画像を表示する
//    * @param {Event} e
//    */
//   const handleFileSelect = e => {
//     const file = e.currentTarget.files[0];
//     const reader = new FileReader();
//     const form_group = $(e.currentTarget).parents('.form-group');
//     form_group.find('.preview, img').removeClass('d-none');
//     reader.onload = () => {
//       form_group.find('img').attr('src', reader.result);
//     };
//     reader.readAsDataURL(file);
//     form_group.find('.custom-file-label').html(file.name);
//   };

//   /**
//    * 取消ボタン押下げ時にファイルを削除する
//    * @param {Event} e
//    */
//   const handleFileReset = e => {
//     const form_group = $(e.currentTarget).parents('.form-group');
//     resetFileUploadItem(form_group);
//   };

//   /**
//    * ファイルアップロード
//    * @param {Event} e
//    */
//   const handleFileUpload = e => {
//     const form_group = $(e.currentTarget).parents('.form-group');
//     if (form_group.find('img').attr('src') === '') {
//       return;
//     }
//     $.ajaxSetup({
//       headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
//       },
//     });

//     const loading = form_group.find('.loading');
//     const loading_img = loading.find('.spinner-border');
//     const loading_message = loading.find('span');
//     showLoading(loading, loading_img, loading_message);

//     $.ajax({
//       type: 'post',
//       url: createUrl('/house_with_mortgage/file'),
//       timeout: 10000, //ミリ秒
//       data: {},
//       processData: false,
//       contentType: false,
//     })
//       // 画像アップロード成功
//       .done(jqXHR => {
//         console.log('画像アップロードに成功しました');
//         loading_img.addClass('d-none');
//         loading_message.html('画像アップロードに成功しました');
//       })
//       // 画像アップロード失敗
//       .fail((jqXHR, text_status, error_thrown) => {
//         console.error(error_thrown);
//       });
//   };

//   /**
//    * ファイルアップロード項目の追加
//    * TODO sakuma この増やし方だとnameが被ってアップロード時に何のファイルか判別出来ないため修正する。
//    *
//    * @param {Event} e
//    */
//   const handleAddFileUploadItem = e => {
//     const form_group = $(e.currentTarget).parents('.form-group');
//     const file_upload_group = form_group.parents('.file_upload_group');
//     const file_group_clone = form_group.clone(true);
//     resetFileUploadItem(file_group_clone);
//     file_group_clone.find('select').val(0);
//     file_group_clone.find('.add').remove();
//     file_group_clone.find('.delete').removeClass('d-none');
//     file_upload_group.append(file_group_clone);
//   };

//   /**
//    * ファイルアップロード項目の削除
//    * @param {Event} e
//    */
//   const handleDeleteFileUploadItem = e => {
//     $(e.currentTarget)
//       .parents('.form-group')
//       .remove();
//   };

//   /***************************
//    * Private Utility Method
//    **************************/
//   /**
//    * ローディング画像を表示する
//    * @param {Object} loading
//    * @param {Object} loading_img
//    * @param {Object} loading_message
//    */
//   const showLoading = (loading, loading_img, loading_message) => {
//     loading.removeClass('d-none');
//     loading_img.removeClass('d-none');
//     loading_message.html('少々お待ちください...');
//   };

//   /**
//    * ファイルアップロードの項目をリセットする
//    * @param {Object} form_group
//    */
//   const resetFileUploadItem = form_group => {
//     form_group.find('.custom-file-input').val('');
//     form_group.find('img').attr('src', '');
//     form_group.find('.preview, .loading').addClass('d-none');
//     form_group.find('.custom-file-label').html('ファイル選択...');
//   };
// });
