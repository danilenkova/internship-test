const getLoading = (state) => state.dragons.loading;

const getDragons = (state) => state.dragons.allDragons;
const getDragon = (state) => state.dragons.currentDragon;

const dragonsSelectors = {
  getLoading,
  getDragons,
  getDragon,
};

export default dragonsSelectors;
