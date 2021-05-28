const dataInjector = (function () {
  let instance: any = null;
  function createObject(schema: any, result: any = {}) {
    if (!schema.items) return result;
    const res = schema.items.reduce((res: any, item: any) => {
      if (item.type != "object") {
        if ("value" in item) {
          res[item.name] = item.value;
        }
        return res;
      } else {
        return createObject(item, res);
      }
    }, {});
    result[schema.name] = res;
    return result;
  }

  function init() {
    let result: any = {};
    function schemaToObject(schema: any) {
      if (schema.type == "group") {
        result[schema.name] = [];
        Object.values(schema.groups).forEach((node: any) => {
          const obje = node.reduce((res: any, item: any) => {
            if (item.type != "group") {
              if ("value" in item) {
                res[item.name] = item.value;
              }
            }
            return res;
          }, {});
          result[schema.name].push(obje);
        });
      } else if (schema.type == "object") {
        result = createObject(schema);
      }
      return result;
    }

    function objectToSchema(result: any, schema: any) {
      try {
        if (!result) return schema;
        if (schema.type == "object") {
          schema.items.forEach((node: any) => {
            if (node.type != "object") {
              node.value = result[schema.name][node.name];
            } else {
              objectToSchema(
                { [node.name]: result[schema.name][node.name] },
                node
              );
            }
          });
        } else if (schema.type == "group") {
          const template = schema.groups[0];
          result[schema.name].forEach((node: any, index: any) => {
            schema.groups[index] = template.map((item: any) => {
              return { ...item };
            });
            schema.groups[index].map((item: any) => {
              item.value = node[item.name];
            });
          });
        }
        return schema;
      } catch (error) {
        return schema;
      }
    }
    return {
      schemaToObject,
      objectToSchema,
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

export default dataInjector.getInstance();
