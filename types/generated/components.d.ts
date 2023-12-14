import type { Schema, Attribute } from '@strapi/strapi';

export interface AdmonitionAdmonition extends Schema.Component {
  collectionName: 'components_admonition_admonitions';
  info: {
    displayName: 'Admonition';
    icon: 'check';
  };
  attributes: {
    description: Attribute.Blocks & Attribute.Required;
    Icon: Attribute.Media;
  };
}

export interface HttprespHttpResp extends Schema.Component {
  collectionName: 'components_httpresp_http_resps';
  info: {
    displayName: 'HttpResp';
    icon: 'bulletList';
  };
  attributes: {
    http_resps: Attribute.Relation<
      'httpresp.http-resp',
      'oneToMany',
      'api::http-response.http-response'
    >;
  };
}

export interface ReqparamsBody extends Schema.Component {
  collectionName: 'components_reqparams_bodies';
  info: {
    displayName: 'body';
    icon: 'bulletList';
  };
  attributes: {
    params: Attribute.Relation<
      'reqparams.body',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface ReqparamsPath extends Schema.Component {
  collectionName: 'components_reqparams_paths';
  info: {
    displayName: 'path';
    icon: 'bulletList';
  };
  attributes: {
    params: Attribute.Relation<
      'reqparams.path',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface ReqparamsQuery extends Schema.Component {
  collectionName: 'components_reqparams_queries';
  info: {
    displayName: 'query';
    icon: 'bulletList';
  };
  attributes: {
    params: Attribute.Relation<
      'reqparams.query',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface SdkmetsSdkmets extends Schema.Component {
  collectionName: 'components_sdkmets_sdkmets';
  info: {
    displayName: 'sdkmets';
    icon: 'bulletList';
  };
  attributes: {
    sdk_mets: Attribute.Relation<
      'sdkmets.sdkmets',
      'oneToMany',
      'api::sdk-method.sdk-method'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'admonition.admonition': AdmonitionAdmonition;
      'httpresp.http-resp': HttprespHttpResp;
      'reqparams.body': ReqparamsBody;
      'reqparams.path': ReqparamsPath;
      'reqparams.query': ReqparamsQuery;
      'sdkmets.sdkmets': SdkmetsSdkmets;
    }
  }
}
