<template>
  <div class="index">
    <div class="header">
      <div class="center head">
        <div class="head-item">
          <div class="year">{{year}}</div>
          <div class="name">{{name}}</div>
        </div>
        <div class="head-item">
          <div class="head-img">
            <img src="./../assets/a.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name: 'Johnson',
      year: '1994'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 400px;
  background-color: #f1f1f1;
}
.head{
  width: 120px;
  height: 120px;
  font-size: 40px;
  border: 3px solid #2c3e50;
  font-weight: bold;
}
.head-item{
  position: relative;
  height: 100%;
}
.year, .name{
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
}
.year{
  top: 0;
}
.name{
  font-size: 30px;
  bottom: 0;
}
</style>
