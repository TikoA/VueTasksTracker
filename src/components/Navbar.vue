<template>
  <nav class="amber darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        Tigran
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
            tag="li"
            to="/"
            exact
            active-class="active">
          <a href="#">Create</a>
        </router-link>
        <router-link
            tag="li"
            to="/list"
            active-class="active">
          <a href="#">List</a>
        </router-link>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  nav {
    padding: 0 2rem;
  }
</style>