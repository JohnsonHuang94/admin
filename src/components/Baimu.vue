<template>
  <div class="baimu">
    <h1>白木村</h1>
    <h2 class="mtb20">Made By Boss</h2>
    <ul>
      <li>何文经（村长、村支书）</li>
      <br> 
      <li>何雄光（村长秘书）</li>
      <li>黄军生（村长司机）</li>
      <br> 
      <li>何清龙（公安局局长）</li>
      <li>何军华（体育局局长）</li>
      <br> 
      <li>何辉龙（农业部部长）</li>
      <li>何文伟（教育部部长）</li>
      <br> 
      <li>严文文（交通部部长）</li>
      <li>何天明（工业部部长）</li>
      <br>
    </ul>
    <h2 class="bottom">白木村村委会宣</h2>
  </div>
</template>

<script>
export default {
  name: 'baimu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 4rem;
}
.mtb20{
  margin-top: 20px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-size: 2rem;
  line-height: 3rem;
}

a {
  color: #42b983;
}
.bottom{
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>
