<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <vue-excel-editor v-model="jsondata" filter-row ref="grid">
          <vue-excel-column field="id" label="Id do menu" type="string" width="90px" />
          <vue-excel-column field="name" label="Nome" type="string" width="200px" />
          <vue-excel-column field="parentName" label="Menu Pai" type="string" width="200px" />
          <vue-excel-column field="grandParentName" label="Menu avô" type="string" width="150px" />

          <!-- A ideia é adicionar novas colunas dinamicamente para cada grupo de usuário que estiver no objeto jsondata -->
          <!--
          <template v-for="(index, )" key="">
            <vue-excel-column

              field="permission"
              label="Permitir acesso"
              type="select"
              :options="['true', 'false']"
              width="150px"
            />
          </template> -->
        </vue-excel-editor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import menuJson from '@/assets/api/menu.json';

export default {
  data: () => ({
    jsondata: menuJson
  }),

  mounted() {
    this.$refs.grid.fields.forEach(field => {
      console.log(field);
    });
    this.$forceUpdate();
  }
};
</script>
