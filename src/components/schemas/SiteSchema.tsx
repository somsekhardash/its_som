import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "components/schemas/interfaces";
import useHttp from "../share/UseHttp";
import { SITE_URL, SECRET_KEY } from "config";

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

  const [SiteDefinition, setDefinition] = useState(SiteSchema);

  const getSite = () => {
    GetSite(`${SITE_URL}/latest`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
      },
    });
  };

  const setSite = (data: string) => {
    SetSite(SITE_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: data,
    });
  };

  useEffect(() => {
    !SiteError && setDefinition(SiteData);
  }, [SiteError, SiteData]);

  return { SiteDefinition, getSite, setSite };
}
