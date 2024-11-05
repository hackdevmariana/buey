<script setup>

</script>

<template>
    <div>
        <div class="container">
            <h1>Dropdowns</h1>
            <ul>

                <DropdownExpandableMenu
                    imageSrc="https://raw.githubusercontent.com/hackdevmariana/works-images/refs/heads/master/logo_buey.jpeg"
                    text="Click to expand" :menuItems="[
                        { textLink: 'Google', link: 'https://www.google.com' },
                        { textLink: 'Facebook', link: 'https://www.facebook.com' }
                    ]" />

                <br>
                Texto debajo del menú.


            </ul>
        </div>
    </div>
</template>

<style scoped></style>
