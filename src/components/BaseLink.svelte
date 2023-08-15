<script>
  export let link;
  export let icon;

  let hover = "";

  const mouseEnterHandler = () => {
    hover = "hover";
  };

  const mouseLeaveHandler = () => {
    hover = "";
  };
</script>

<a
  href={link}
  class="flex items-center m-2"
  on:mouseenter={mouseEnterHandler}
  on:mouseleave={mouseLeaveHandler}
>
  <i class="{icon} m-2" />
  <span class={hover}><slot /></span>
</a>
