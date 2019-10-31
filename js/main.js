
$('.loading button').on('click',()=>{
    return new Promise((resolve,reject)=>{
        $('.loading.active').removeClass('active')
        $('#page.pageLoading').removeClass('pageLoading')
        resolve(1)
    }).then(()=>{
        
        start () 
    })
})
    
    //打开页面 调用一次 
    // console.log(4)
    $(window).on('scroll',function(){
        start () //滚动页面是 调用一次   方便管理 
})

function start (){
    $('.main img').not('[data-isLoaded]').each(function(){
        var $node = $(this)
       if( isShow( $node) ){
           //缓冲效果 
            setTimeout(function(){
            loadIng( $node)
            },500)
        
       }
    })
}
// 页面逻辑
function isShow($node){
    // 当一个元素出现在我们眼前    小于 窗口高度 加上窗口滚动的高度的时候    就意味着  到达目标点 
    // 可以开始加载图片 或者其他内容
    // console.log(1)
    return $node.offset().top <=  $(window).scrollTop()+$(window).height()
   
    
}
// 显示状态
function loadIng($img){
    // 获取目标元素 并替换 
    $img.attr('src', $img.attr('data-src'))
    //性能优化   进行判断   已经加载的  不会再进行加载  
    $img.attr('data-isLoaded', 1)
    // console.log(2)
}