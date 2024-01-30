import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
      name: 'reactApp',
      entry: '//localhost:3191',
      container: '#container',
      activeRule: '/app-react',
    },
  ]);
const startMicro = start;
export {
    // 启动 qiankun
    startMicro,
}