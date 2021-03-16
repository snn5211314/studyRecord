<template>
 <div id="vcomments"></div>
</template>

<script>
export default {
 name: 'Valine',
 mounted: function(){
  // require window 
  const Valine = require('valine');
  if (typeof window !== 'undefined') {
    this.window = window
    window.AV = require('leancloud-storage')
  }
  new Valine({
    el: '#vcomments' ,
    appId: 'CQSqf0WhbtR47sgxcJFb7GwA-gzGzoHsz',
    appKey: 'qslePIFULV0L3rBl1LuCUWTT',
    notify:false, 
    verify:true, 
    avatar:'mp', 
    placeholder: '请开始你的表演' 
  });
 },
}
</script>