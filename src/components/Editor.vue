<template>
  <div>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :card-props="{ flat: true }"
      placeholder="Write Something"
      @blur="addContent(value)"
    />
  </div>
</template>

<script>
// import the component and the necessary extensions
import { TiptapVuetify, 
          Heading, 
          Bold, 
          Italic, 
          Strike, 
          Underline, 
          Paragraph, 
          BulletList, 
          OrderedList, 
          ListItem, 
          Link, 
          Blockquote, 
          HardBreak, 
          HorizontalRule, 
          History 
        } from 'tiptap-vuetify'

export default {

  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting editor's content
    content: '',
  }),
  methods: {
    addContent(value) {
      console.log('In editor', value);
    }
  }
}
</script>