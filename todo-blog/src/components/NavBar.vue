<template>
  <div>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/category">Category</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #9575CD;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: 600;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #37474F;
}
</style>
