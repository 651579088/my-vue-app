<template>
  <div class="footerMenuClassName">
    <footer class="nav">
      <div class="footer_menu" id="footer_menu">
        <ul>
          <li v-for="item in footerMenu" :key="item.index">
            <router-link :to="item.name" :class="{'act':footerMenuIndex === item.index}">
              <i :class="item.className"></i><p>{{item.text}}</p>
            </router-link>
          </li>
          <div class="foot-cart-num2">888</div>
        </ul>
      </div>
    </footer>
    <section class="comFooterBox"></section>
  </div>
</template>
<script>
  export default{
    props: {
      footerMenuIndex: '' // 默认选中
    },
    data () {
      return {
        footerMenu: [
          {name: 'home', className: 'icon icon-home', text: '首页', index: 0},
          {name: 'list', className: 'icon icon-goods', text: '列表', index: 1},
          {name: 'list', className: 'icon icon-surprise', text: '惊喜', index: 2},
          {name: 'list', className: 'icon icon-cart', text: '购物车', index: 3},
          {name: 'list', className: 'icon icon-user', text: '我', index: 4}
        ]
      }
    },
    created () {
      // this.$root.eventHub.$on('eventHub', this.fetchList)
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
@import '../../assets/styles/init';
.footerMenuClassName{
  .footer_menu { width: 100%; margin: 0 auto; min-height: 48/@rem*2; max-height: 152/@rem*2; background-color: rgba(255, 255, 255, 0.9); position: fixed; bottom: 0; left: 0; z-index: 200; }
  .footer_menu ul { width: 100%; padding: 10/@rem*2; display: flex; }
  .footer_menu li { display: flex; flex: 1; width: 0; overflow: hidden; justify-content: center; text-align: center; }
  .footer_menu li p { font-size: 10/@rem*2; color: #999999; }
  .footer_menu li a.act p { color: #E76540; }
  .footer_menu li i.icon { display: block; width: 22/@rem*2; height: 20/@rem*2; margin: 0 auto 5/@rem*2; background: url('../../assets/icons/footer.gif') no-repeat; background-size: 200/@rem*2; text-indent: -9999/@rem*2; }

  .nav {
    .footer_menu:before { content: ""; position: absolute; z-index: 1; top: 0; left: 0; right: 0; border-top: 1/@rem*2 solid #d9d9d9; -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); }
    .footer_menu li a.act p { color: #ff4040; }
    .footer_menu li i.icon { display: block; width: 23/@rem*2; height: 24/@rem*2; margin: 0 auto; background: url('../../assets/icons/nav_icon4.gif') no-repeat; background-size: 240/@rem*2; margin-bottom: 5/@rem*2; text-indent: -9999/@rem*2; }

    /*底部图标*/
    .footer_menu li i.icon-home { background-position: 0/@rem*2 0/@rem*2; }
    .footer_menu li i.icon-goods { background-position: -55/@rem*2 0/@rem*2; }
    .footer_menu li i.icon-surprise { background-position: -110/@rem*2 0/@rem*2; }
    .footer_menu li i.icon-cart { background-position: -165/@rem*2 0/@rem*2; }
    .footer_menu li i.icon-user { background-position: -220/@rem*2 0/@rem*2; }
    .footer_menu li a.act i.icon-home { background-position: 0/@rem*2 -28/@rem*2; }
    .footer_menu li a.act i.icon-goods { background-position: -55/@rem*2 -28/@rem*2; }
    .footer_menu li a.act i.icon-surprise { background-position: -109/@rem*2 -28/@rem*2; }
    .footer_menu li a.act i.icon-cart { background-position: -164/@rem*2 -28/@rem*2; }
    .footer_menu li a.act i.icon-user { background-position: -220/@rem*2 -28/@rem*2; }
    .foot-cart-num { display: block; position: absolute; background-color: #ff4040; top: 5/@rem*2; left: 50%; padding: 2/@rem*2 4/@rem*2; border-radius: 10/@rem*2; font-size: 10/@rem*2; color: #fff; line-height: 1; text-align: center; box-shadow: 0 0 0 1/@rem*2 #fff; z-index: 22; }
    .foot-cart-num2 { display: block; position: absolute; background-color: #ff4040; top: 5/@rem*2; left: 70%; padding: 2/@rem*2 4/@rem*2; border-radius: 10/@rem*2; font-size: 10/@rem*2; color: #fff; line-height: 1; text-align: center; box-shadow: 0 0 0 1/@rem*2 #fff; z-index: 22; }
    }
    .comFooterBox{ padding-bottom: 120/@rem; background-color: #F0F0F0;}
  }
</style>
