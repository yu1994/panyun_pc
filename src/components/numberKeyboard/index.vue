<template>
    <div class="number-keyboard">
      <div class="number-keyboard__body"@click="getKey($event)">
        <i class="my-hairline my-key">1</i>
        <i class="my-hairline my-key">2</i>
        <i class="my-hairline my-key">3</i>
        <i class="my-hairline my-key">4</i>
        <i class="my-hairline my-key">5</i>
        <i class="my-hairline my-key">6</i>
        <i class="my-hairline my-key">7</i>
        <i class="my-hairline my-key">8</i>
        <i class="my-hairline my-key">9</i>
        <i class="my-hairline my-key">DEL</i>
        <i class="my-hairline my-key">0</i>
        <i class="my-hairline my-key">ENTER</i>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    methods:{
      del(){
        this.$emit('delete')
      },
      getKey(event) {
        const eve = event || window.event;
        let node = eve.currentTarget;
        node =node.children;
        for (let i = 0, len =node.length; i < len; i++){
          node[i].style.backgroundColor = "#ffffff"
        }
        const target = eve.target || eve.srcElement;
        if(target.nodeName.toLowerCase() == "i"){
          const val = target.innerHTML;
          target.style.backgroundColor="#e8e8e8"
          let time = null;
          time = setTimeout(function() {
            target.style.backgroundColor="#ffffff"
            clearTimeout(time)
            time = null;
          },300)
          if (val === 'DEL'){
            this.onDel(val)
          } else if (val === 'ENTER'){
            this.onEnter(val)
          } else this.onInput(val);
        }
      },
      onInput(key){
        this.$emit('input',key)
      },
      onDel(){
        this.$emit('delete')
      },
      onEnter(){
        this.$emit('ent')
      }

    }
  }
</script>

<style scoped lang="stylus">
  .number-keyboard
    left: 0;
    bottom: 0;
    width: 100%;
    z-index 9999
    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    font-size 0
    .number-keyboard__body
      box-sizing: border-box;
      .my-hairline
        position: relative
      .my-key
        width: 33.3333333%;
        font-size: 24px;
        font-style: normal;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        height: 54px;
        line-height: 54px;
        box-sizing border-box
        &::after
          content: ' ';
          position: absolute;
          pointer-events: none;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          -webkit-transform: scale(.5);
          transform: scale(.5);
          border: 0 solid #ebedf0;
          border-width: 1px 1px 0 0;/*no*/
</style>
