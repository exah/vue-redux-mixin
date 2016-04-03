import { bindActionCreators } from 'redux';

export default (
  store,
  actions,
  stateKey = 'state',
  actionsKey = '$actions'
) => {
  const getFrozenState = () => Object.freeze( store.getState() );

  return {
    data: () => ({
      [stateKey]: getFrozenState(),
    }),
    methods: {
      updateState() {
        this.$set( stateKey, getFrozenState() );
      },
    },
    created() {
      this[actionsKey] = bindActionCreators( actions, store.dispatch );
      this.unsubscribe = store.subscribe(
        () => this.$set( stateKey, getFrozenState() )
      );
    },
    beforeDestroy() {
      this.unsubscribe();
    },
  }
}
