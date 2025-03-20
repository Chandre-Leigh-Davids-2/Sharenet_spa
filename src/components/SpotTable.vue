<template>
    <div class="row table d-flex flex-column align-items-center">
    <h2 class="text-center">Spot Prices</h2>
      <input
        type="text"
        v-model="searchQuery"
        class="form-control w-50 mb-3 mt-3"
        placeholder="Search by name..."
      />
      <table class="table table-bordered table-hover mt-3 w-75">
        <thead>
          <tr>
            <th @click="sortTable('fullName')">
              Name <span v-if="sortColumn === 'fullName'">{{ sortDirectionIcon }}</span>
            </th>
            <th @click="sortTable('price')">
              Price <span v-if="sortColumn === 'price'">{{ sortDirectionIcon }}</span>
            </th>
            <th @click="sortTable('move')">
              Move <span v-if="sortColumn === 'move'">{{ sortDirectionIcon }}</span>
            </th>
            <th @click="sortTable('pmove')">
              Percentage Move <span v-if="sortColumn === 'pmove'">{{ sortDirectionIcon }}</span>
            </th>
            <th @click="sortTable('datetime')">
              Time <span v-if="sortColumn === 'datetime'">{{ sortDirectionIcon }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(group, name) in groupedSpots" :key="name">
            <tr v-for="(spot, index) in group" :key="spot.datetime">
              <td v-if="index === 0" :rowspan="group.length">{{ name }}</td>
              <td>{{ formatPrice(spot.price) }}</td>
              <td>{{ formatMove(spot.move) }}</td>
              <td :class="spot.pmove >= 0 ? 'text-success' : 'text-danger'">
                {{ formatPMove(spot.pmove) }}%
              </td>
              <td>{{ formatTime(spot.datetime) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      spots: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        sortColumn: "fullName",
        sortAscending: true,
        searchQuery: ""
      };
    },
    computed: {
      filteredSpots() {
        if (!this.searchQuery) return this.spots;
  
        return this.spots.filter(spot =>
          spot.fullName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      groupedSpots() {
        let sorted = [...this.filteredSpots].sort((a, b) => {
          let valueA = a[this.sortColumn];
          let valueB = b[this.sortColumn];
  
          if (this.sortColumn === "datetime") {
            valueA = new Date(valueA);
            valueB = new Date(valueB);
          }
  
          if (typeof valueA === "string") {
            return this.sortAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
          }
  
          return this.sortAscending ? valueA - valueB : valueB - valueA;
        });
  
        return sorted.reduce((groups, spot) => {
          if (!groups[spot.fullName]) {
            groups[spot.fullName] = [];
          }
          groups[spot.fullName].push(spot);
          return groups;
        }, {});
      },
      sortDirectionIcon() {
        return this.sortAscending ? "▲" : "▼";
      }
    },
    methods: {
      formatPrice(price) {
        return price ? `$${price.toFixed(2)}` : "N/A";
      },
      formatMove(move) {
        return move ? `$${move.toFixed(2)}` : "N/A";
      },
      formatPMove(pmove) {
        return pmove ? `${pmove.toFixed(2)}` : "N/A";
      },
      formatTime(datetime) {
        return new Date(datetime).toLocaleTimeString();
      },
      sortTable(column) {
        if (this.sortColumn === column) {
          this.sortAscending = !this.sortAscending;
        } else {
          this.sortColumn = column;
          this.sortAscending = true;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Metrophobic&display=swap');
  h2{
    color: white;
    font-family: "Metrophobic", sans-serif;
    padding: 2%;
    font-size: 3vw;
  }
  table {
    width: fit-content;
  }
  th {
    cursor: pointer;
    user-select: none;
  }
  th span {
    margin-left: 5px;
  }
  </style>
  