import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";
import useHttp from "../share/UseHttp";
import { SITE_URL, SECRET_KEY } from "src/config";
import dataInject from "src/components/share/dataInjector";

const SiteSchema: ISchema = {
  name: "site",
  type: SchemaTypes.OBJECT,
  items: [
    {
      type: ComponentTypes.COLOR,
      description: "sitecolor",
      value: "",
      name: "sitecolor",
    },
    {
      type: ComponentTypes.UPLOAD,
      description: "background",
      value: "",
      name: "background",
    },
    {
      type: ComponentTypes.TEXT,
      description: "Coordinate X",
      value: "",
      name: "coordinatex",
    },
    {
      type: ComponentTypes.TEXT,
      description: "Coordinate Y",
      value: "",
      name: "coordinatey",
    },
    {
      type: ComponentTypes.TEXT,
      description: "MAX ZOOM",
      value: "",
      name: "max_zoom",
    },
    {
      type: ComponentTypes.TEXT,
      description: "MIN ZOOM",
      value: "",
      name: "min_zoom",
    },
  ],
};

export function SiteAPI() {
  const [SiteLoader, SiteData, SiteError, GetSite] = useHttp();
  const [SetSiteLoader, SetSiteData, SetSiteError, SetSite] = useHttp();

  const [SiteDefinition, setDefinition] = useState(null);

  const getSite = () => {
    GetSite(`${SITE_URL}/latest?meta=false`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
        "X-Master-Key": SECRET_KEY,
      },
    });
  };

  const setSite = (data: string) => {
    SetSite(SITE_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "X-Master-Key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInject.schemaToObject(JSON.parse(data))),
    });
  };

  useEffect(() => {
    !SiteError && setDefinition(SiteData);
  }, [SiteError, SiteData]);

  useEffect(() => {
    if (!SiteError && SiteData) {
      setDefinition(dataInject.objectToSchema(SiteData, SiteSchema));
    }
  }, [SiteError, SiteData]);

  return { SiteDefinition, getSite, setSite };
}
