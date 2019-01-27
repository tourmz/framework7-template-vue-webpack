<template>
  <f7-page>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
    <f7-block-title>Form Example</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>URL</f7-label>
        <f7-input type="url" placeholder="URL"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select">
          <option selected>Male</option>
          <option>Female</option>
        </f7-input>
      </f7-list-item>
</f7-list>


    </f7-block>
  </f7-page>
</template>

<script>
export default {}
</script>
