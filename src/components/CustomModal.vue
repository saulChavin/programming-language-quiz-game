<template>
    <div id="custom-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
   /* styles applied to the custom modal component  */
    .modal {
         display: none;
         position: fixed;
         z-index: 1;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         overflow: auto;
         background-color: rgb(0, 0, 0);
         background-color: rgba(0, 0, 0, 0.4);
    }
    .modal-content {
         background-color: #fefefe;
         margin: 15% auto;
         padding: 20px;
         border: 1px solid #888;
         width: 80%;
    }
    .close {
         color: #aaa;
         float: right;
         font-size: 28px;
         font-weight: bold;
    }
    .close:hover,
    .close:focus {
         color: black;
         text-decoration: none;
         cursor: pointer;
    }

</style>