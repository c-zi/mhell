/*排除编译的范围*/
fis.set('project.ignore', [
    'node_modules/**',
    'fis-conf.js'
]);
/*设置发布路径*/
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: 'D:/nginx-1.8.1/html'
    })
});

/*指定模块化插件*/
fis.hook('commonjs', {
    paths: {
        // jquery: '/common/js/mod/jquery-2.2.4.js', //设置jquery别名
        react: '/common/js/mod/react.js' //设置react别名
    }
});
/*指定哪些目录下的文件执行define包裹*/
fis.match('/common/js/mod/**', {
    isMod: true
});
fis.match('/common/components/**', {
    isMod: true
});

/*模块化加载器配置*/
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true, //js&css打包成一个文件
        sourceMap: true, //是否生成依赖map文件
        useInlineMap: true //是否将sourcemap作为内嵌脚本输出
    })
});
/*支持react*/
fis.match('*.jsx', {
    rExt: '.js',
    parser: fis.plugin('typescript', {})
});
