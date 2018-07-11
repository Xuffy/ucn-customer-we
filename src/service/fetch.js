import ajax from 'service/ajax';
import $apis from '../apis/index'
import {Message} from 'element-ui';

const $ajax = new ajax();

export default {
  export_task(templateCode, params = {}) {
    return $ajax.post($apis.EXPORTFILE_EXPORTTASKE, {templateCode, arguments: JSON.stringify(params)})
      .then(res => {
        Message.success('导出任务正在执行，请到任务中心查看');
      });
  }
};
