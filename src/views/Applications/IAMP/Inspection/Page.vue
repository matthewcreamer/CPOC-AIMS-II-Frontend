<template>
  <div>
    <ViewFR v-if="current_view == 0" @currentView="(view) => current_view = view" />
    <AddFR v-if="current_view == 1" @currentView="(view) => current_view = view" />
    <EditFR v-if="current_view == 2" @currentView="(view, row) => SET_EDIT(view, row)" />
  </div>
</template> 

<script>

//Structures
import ViewFR from "@/views/Applications/IAMP/Inspection/View.vue"
import AddFR from "@/views/Applications/IAMP/Inspection/Add.vue"
import EditFR from "@/views/Applications/IAMP/Inspection/Edit.vue"

export default {
  name: "inspection-record",
  components: {
    ViewFR,
    AddFR,
    EditFR
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "INSPECTION",
      subpageInnerName: null,
    });
  },
  data() {
    return {
      current_view: 1,
      edit_row: 0
    };
  },
  computed: {},
  methods: {
    SET_EDIT(view, row) {
      this.current_view = view;
      this.edit_row = row;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.page-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 51px calc(100vh - 95px);
  transition: all 0.3s;
  overflow-y: hidden;
}
#report-sheet {
  max-width: 100%;
  width: 100%;
  font-family: $web-default-font;
  box-shadow: none;
  padding: 0 !important;
  margin-top: 0;
  margin-bottom: 0;
  .report-container {
    .header {
      .title {
        grid-column: span 4;
      }
    }
    .sheet-body {
      grid-template-columns: 50% 50%;
      .form-item {
        display: grid;
        grid-template-columns: 220px calc(100% - 220px);
        grid-template-rows: 35px;
        .form-item-label {
          label {
            // text-transform: capitalize;
          }
        }
        .form-item-value {
          grid-column: span 1;
          label {
            margin: 0 auto;
            font-weight: 600;
          }
        }
      }
      .form-item-picture-log .img-box {
        height: 244px;
      }
    }
  }
}

.page-section {
  padding: 20px;
  overflow-y: auto;
  grid-row: span 2;
}

.page-section:last-child {
  padding-bottom: 20px;
}

.tab-wrapper {
  height: 48px;
}
.vue-tabs-chrome {
  padding-top: 10px;
  background-color: #d9d9d9;
  font-size: 14px;
}
.info-tab-display {
  display: flex;
}
</style>