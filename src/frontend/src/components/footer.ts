import { html } from "lit-html";

export const footer = html`<footer class="l-footer">
  <a
    class="c-page-signature"
    aria-label="DFINITY homepage"
    href="https://dfinity.org"
    target="_blank"
  >
    <svg class="c-page-signature__badge" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 303 16">
      <path fill="url(#paint0_linear_1810_283)" d="M141.501 0c-1.894 0-3.959.97-6.141 2.882-1.036.906-1.93 1.877-2.6 2.653l.006.006v-.006s1.058 1.153 2.229 2.389c.629-.748 1.535-1.765 2.577-2.683 1.941-1.7 3.205-2.059 3.929-2.059 2.723 0 4.935 2.16 4.935 4.812 0 2.635-2.217 4.794-4.935 4.812-.124 0-.282-.018-.482-.059.794.341 1.647.588 2.458.588 4.989 0 5.965-3.253 6.03-3.488a7.736 7.736 0 0 0 .223-1.859c0-4.4-3.694-7.988-8.229-7.988Z"/>
      <path fill="url(#paint1_linear_1810_283)" d="M124.078 16c1.894 0 3.958-.97 6.141-2.883 1.035-.905 1.929-1.876 2.6-2.652l-.006-.006v.006s-1.059-1.153-2.23-2.389c-.629.747-1.535 1.765-2.576 2.683-1.941 1.7-3.206 2.059-3.929 2.059-2.724-.006-4.936-2.165-4.936-4.818 0-2.635 2.218-4.794 4.936-4.812.123 0 .282.018.482.059-.794-.341-1.647-.588-2.459-.588-4.988 0-5.959 3.253-6.029 3.482A7.772 7.772 0 0 0 115.848 8c0 4.412 3.694 8 8.23 8Z"/>
      <path fill="#29ABE2" d="M143.466 13.265c-2.553-.065-5.206-2.077-5.747-2.577-1.4-1.294-4.63-4.794-4.883-5.07C130.472 2.965 127.266 0 124.078 0h-.012c-3.871.018-7.124 2.641-7.994 6.141.064-.23 1.341-3.547 6.023-3.43 2.553.065 5.218 2.107 5.765 2.607 1.4 1.294 4.629 4.794 4.882 5.07 2.365 2.647 5.571 5.612 8.759 5.612h.012c3.871-.018 7.129-2.641 7.994-6.141-.071.23-1.353 3.518-6.041 3.406Z"/>
      <path fill="currentColor" d="M2.93 11.24V4.75H1.74C1.61 5.43.95 5.96 0 5.97v.93h1.56v4.34h1.37Z"/>
      <path fill="currentColor" d="M7.909 8c0-.68.1-1.26.35-1.65.2-.32.51-.53.98-.53.48 0 .77.21.97.53.26.39.36.97.36 1.65 0 .68-.1 1.26-.36 1.65-.2.32-.49.53-.97.53-.47 0-.78-.21-.98-.53-.25-.39-.35-.97-.35-1.65Zm-1.38 0c0 .83.13 1.64.57 2.31.43.64 1.13 1.09 2.14 1.09 1.01 0 1.71-.45 2.13-1.09.44-.67.58-1.48.58-2.31 0-.83-.14-1.64-.58-2.31-.42-.64-1.12-1.09-2.13-1.09-1.01 0-1.71.45-2.14 1.09-.44.67-.57 1.48-.57 2.31Z"/>
      <path fill="currentColor" d="M16.717 8c0-.68.1-1.26.35-1.65.2-.32.51-.53.98-.53.48 0 .77.21.97.53.26.39.36.97.36 1.65 0 .68-.1 1.26-.36 1.65-.2.32-.49.53-.97.53-.47 0-.78-.21-.98-.53-.25-.39-.35-.97-.35-1.65Zm-1.38 0c0 .83.13 1.64.57 2.31.43.64 1.13 1.09 2.14 1.09 1.01 0 1.71-.45 2.13-1.09.44-.67.58-1.48.58-2.31 0-.83-.14-1.64-.58-2.31-.42-.64-1.12-1.09-2.13-1.09-1.01 0-1.71.45-2.14 1.09-.44.67-.57 1.48-.57 2.31Z"/>
      <path fill="currentColor" d="M24.976 6.28c0-.41.29-.69.66-.69.38 0 .66.28.66.69 0 .41-.28.7-.66.7-.37 0-.66-.28-.66-.7Zm-1 0c0 .91.75 1.63 1.66 1.63.9 0 1.67-.7 1.67-1.63 0-.92-.77-1.64-1.67-1.64-.9 0-1.66.72-1.66 1.64Zm5.37 3.44c0-.41.29-.69.66-.69.38 0 .66.28.66.69 0 .41-.28.7-.66.7-.37 0-.66-.28-.66-.7Zm-1 0c0 .91.75 1.63 1.66 1.63.9 0 1.67-.7 1.67-1.63 0-.92-.77-1.64-1.67-1.64-.9 0-1.66.72-1.66 1.64Zm-2.23 1.52 4.58-6.49h-1.16l-4.58 6.49h1.16Z"/>
      <path fill="currentColor" d="M41.17 7.69c0-1.6 1.12-2.36 2.21-2.36 1.1 0 2.22.76 2.22 2.36 0 1.6-1.12 2.36-2.22 2.36-1.09 0-2.21-.76-2.21-2.36Zm-1.43.01c0 2.28 1.72 3.69 3.64 3.69 1.93 0 3.65-1.41 3.65-3.69 0-2.29-1.72-3.7-3.65-3.7-1.92 0-3.64 1.41-3.64 3.7Z"/>
      <path fill="currentColor" d="M56.316 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v4.19l-2.803-4.456a.5.5 0 0 0-.423-.234h-.944a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.38a.5.5 0 0 0 .5-.5V6.21l3.073 4.8a.5.5 0 0 0 .42.23h.677Z"/>
      <path fill="currentColor" d="M63.171 8.86a.5.5 0 0 0 .5-.5v-.18a.5.5 0 0 0-.5-.5h-1.9a.5.5 0 0 0-.5.5v.18a.5.5 0 0 0 .5.5h1.9Z"/>
      <path fill="currentColor" d="M70.832 11.39c1.721 0 2.717-.988 3.129-1.96.104-.245-.05-.51-.304-.588l-.35-.105c-.267-.081-.544.077-.683.318-.297.517-.86.985-1.792.985-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37.933 0 1.475.432 1.756.937.14.252.426.42.7.333l.348-.11c.25-.078.401-.34.3-.584C73.507 4.91 72.52 4 70.813 4c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Z"/>
      <path fill="currentColor" d="M83.04 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.39a.5.5 0 0 0-.5.5V7h-3.09V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.38a.5.5 0 0 0 .5-.5V8.3h3.09v2.44a.5.5 0 0 0 .5.5h.39Z"/>
      <path fill="currentColor" d="M92.36 10.911a.5.5 0 0 0 .47.329h.424a.5.5 0 0 0 .468-.678l-2.32-6.09a.5.5 0 0 0-.467-.322h-.911a.5.5 0 0 0-.467.32l-2.337 6.09a.5.5 0 0 0 .467.68h.383a.5.5 0 0 0 .47-.329l.47-1.291h2.88l.47 1.291ZM90.45 5.68l.98 2.68h-1.96l.98-2.68Z"/>
      <path fill="currentColor" d="M98.307 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.4a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.4Z"/>
      <path fill="currentColor" d="M108.514 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v4.19l-2.803-4.456a.502.502 0 0 0-.424-.234h-.943a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.38a.5.5 0 0 0 .5-.5V6.21l3.072 4.8a.5.5 0 0 0 .421.23h.677Z"/>
      <path fill="currentColor" d="M157.461 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.4a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.4Z"/>
      <path fill="currentColor" d="M167.667 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v4.19l-2.803-4.456a.499.499 0 0 0-.423-.234h-.944a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.38a.5.5 0 0 0 .5-.5V6.21l3.073 4.8a.5.5 0 0 0 .421.23h.676Z"/>
      <path fill="currentColor" d="M177.032 5.46a.5.5 0 0 0 .5-.5v-.31a.5.5 0 0 0-.5-.5h-4.87a.5.5 0 0 0-.5.5v.31a.5.5 0 0 0 .5.5h1.74v5.28a.5.5 0 0 0 .5.5h.39a.5.5 0 0 0 .5-.5V5.46h1.74Z"/>
      <path fill="currentColor" d="M184.963 11.24a.5.5 0 0 0 .5-.5v-.3a.5.5 0 0 0-.5-.5h-2.56V8.3h2.27a.5.5 0 0 0 .5-.5v-.23a.5.5 0 0 0-.5-.5h-2.27V5.45h2.56a.5.5 0 0 0 .5-.5v-.3a.5.5 0 0 0-.5-.5h-3.44a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h3.44Z"/>
      <path fill="currentColor" d="M192.675 10.967a.501.501 0 0 0 .446.273h.407a.5.5 0 0 0 .443-.732l-1.137-2.168c.93-.27 1.51-1.02 1.51-2.01 0-1.23-.88-2.18-2.26-2.18h-2.27a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.39a.5.5 0 0 0 .5-.5V8.51h.72l1.251 2.457Zm-1.971-3.647V5.35h1.12c.7 0 1.11.39 1.11.99 0 .58-.41.98-1.11.98h-1.12Z"/>
      <path fill="currentColor" d="M203.663 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v4.19l-2.803-4.456a.499.499 0 0 0-.423-.234h-.944a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.38a.5.5 0 0 0 .5-.5V6.21l3.073 4.8a.5.5 0 0 0 .421.23h.676Z"/>
      <path fill="currentColor" d="M212.268 11.24a.5.5 0 0 0 .5-.5v-.3a.5.5 0 0 0-.5-.5h-2.56V8.3h2.27a.5.5 0 0 0 .5-.5v-.23a.5.5 0 0 0-.5-.5h-2.27V5.45h2.56a.5.5 0 0 0 .5-.5v-.3a.5.5 0 0 0-.5-.5h-3.44a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h3.44Z"/>
      <path fill="currentColor" d="M221.319 5.46a.5.5 0 0 0 .5-.5v-.31a.5.5 0 0 0-.5-.5h-4.87a.5.5 0 0 0-.5.5v.31a.5.5 0 0 0 .5.5h1.74v5.28a.5.5 0 0 0 .5.5h.39a.5.5 0 0 0 .5-.5V5.46h1.74Z"/>
      <path fill="currentColor" d="M233.12 11.39c1.722 0 2.717-.988 3.129-1.96.104-.245-.049-.51-.304-.588l-.35-.105c-.267-.081-.543.077-.682.318-.297.517-.861.985-1.793.985-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37.933 0 1.475.432 1.756.937.141.252.426.42.701.333l.347-.11c.251-.078.402-.34.301-.584C235.794 4.91 234.808 4 233.1 4c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69Z"/>
      <path fill="currentColor" d="M240.979 7.69c0-1.6 1.12-2.36 2.21-2.36 1.1 0 2.22.76 2.22 2.36 0 1.6-1.12 2.36-2.22 2.36-1.09 0-2.21-.76-2.21-2.36Zm-1.43.01c0 2.28 1.72 3.69 3.64 3.69 1.93 0 3.65-1.41 3.65-3.69 0-2.29-1.72-3.7-3.65-3.7-1.92 0-3.64 1.41-3.64 3.7Z"/>
      <path fill="currentColor" d="M257.984 11.24a.5.5 0 0 0 .5-.5V4.65a.5.5 0 0 0-.5-.5h-1.043a.499.499 0 0 0-.463.312l-1.954 4.808-2.002-4.812a.498.498 0 0 0-.461-.308h-.987a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.32a.5.5 0 0 0 .5-.5V6.31l1.912 4.621c.078.187.26.309.462.309h.481a.5.5 0 0 0 .463-.31l1.912-4.66v4.47a.5.5 0 0 0 .5.5h.36Z"/>
      <path fill="currentColor" d="M264.035 7.38V5.35h1.09c.69 0 1.11.39 1.11 1.02 0 .61-.42 1.01-1.11 1.01h-1.09Zm1.26 1.19c1.4 0 2.33-.92 2.33-2.21 0-1.28-.93-2.21-2.33-2.21h-2.15a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.38a.5.5 0 0 0 .5-.5V8.57h1.27Z"/>
      <path fill="currentColor" d="M273.859 11.4c1.52 0 2.73-.93 2.73-2.67V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v3.98c0 .93-.51 1.42-1.35 1.42-.82 0-1.34-.49-1.34-1.42V4.65a.5.5 0 0 0-.5-.5h-.38a.5.5 0 0 0-.5.5v4.08c0 1.74 1.21 2.67 2.72 2.67Z"/>
      <path fill="currentColor" d="M285.391 5.46a.5.5 0 0 0 .5-.5v-.31a.5.5 0 0 0-.5-.5h-4.87a.5.5 0 0 0-.5.5v.31a.5.5 0 0 0 .5.5h1.74v5.28a.5.5 0 0 0 .5.5h.39a.5.5 0 0 0 .5-.5V5.46h1.74Z"/>
      <path fill="currentColor" d="M293.323 11.24a.5.5 0 0 0 .5-.5v-.3a.5.5 0 0 0-.5-.5h-2.56V8.3h2.27a.5.5 0 0 0 .5-.5v-.23a.5.5 0 0 0-.5-.5h-2.27V5.45h2.56a.5.5 0 0 0 .5-.5v-.3a.5.5 0 0 0-.5-.5h-3.44a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h3.44Z"/>
      <path fill="currentColor" d="M301.035 10.967a.499.499 0 0 0 .445.273h.407a.5.5 0 0 0 .443-.732l-1.136-2.168c.93-.27 1.51-1.02 1.51-2.01 0-1.23-.88-2.18-2.26-2.18h-2.27a.5.5 0 0 0-.5.5v6.09a.5.5 0 0 0 .5.5h.39a.5.5 0 0 0 .5-.5V8.51h.72l1.251 2.457Zm-1.971-3.647V5.35h1.12c.7 0 1.11.39 1.11.99 0 .58-.41.98-1.11.98h-1.12Z"/>
      <defs>
        <linearGradient id="paint0_linear_1810_283" x1="137.217" x2="148.406" y1="1.055" y2="12.641" gradientUnits="userSpaceOnUse">
          <stop offset=".21" stop-color="#F15A24"/>
          <stop offset=".684" stop-color="#FBB03B"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1810_283" x1="128.361" x2="117.173" y1="14.945" y2="3.358" gradientUnits="userSpaceOnUse">
          <stop offset=".21" stop-color="#ED1E79"/>
          <stop offset=".893" stop-color="#522785"/>
        </linearGradient>
      </defs>
    </svg>
  </a>
</footer>`;
