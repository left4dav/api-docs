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

export interface EndpointParametersRequestBody extends Schema.Component {
  collectionName: 'components_endpoint_parameters_request_bodies';
  info: {
    displayName: 'RequestBody';
    icon: 'bulletList';
  };
  attributes: {
    parameters: Attribute.Relation<
      'endpoint-parameters.request-body',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface EndpointParametersRequestPath extends Schema.Component {
  collectionName: 'components_endpoint_parameters_request_paths';
  info: {
    displayName: 'RequestPath';
    icon: 'bulletList';
  };
  attributes: {
    parameters: Attribute.Relation<
      'endpoint-parameters.request-path',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface EndpointParametersRequestQuery extends Schema.Component {
  collectionName: 'components_endpoint_parameters_request_queries';
  info: {
    displayName: 'RequestQuery';
    icon: 'bulletList';
  };
  attributes: {
    parameters: Attribute.Relation<
      'endpoint-parameters.request-query',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface EndpointSdkMethodsSdkMethods extends Schema.Component {
  collectionName: 'components_endpoint_sdk_methods_sdk_methods';
  info: {
    displayName: 'SDK methods';
    icon: 'code';
    description: '';
  };
  attributes: {
    sdk_methods: Attribute.Relation<
      'endpoint-sdk-methods.sdk-methods',
      'oneToMany',
      'api::sdk-method.sdk-method'
    >;
  };
}

export interface HttpresponseParametersHttpResponseParameters
  extends Schema.Component {
  collectionName: 'components_httpresponse_parameters_http_response_parameters';
  info: {
    displayName: 'HttpResponse Parameters';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    parameters: Attribute.Relation<
      'httpresponse-parameters.http-response-parameters',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'admonition.admonition': AdmonitionAdmonition;
      'endpoint-parameters.request-body': EndpointParametersRequestBody;
      'endpoint-parameters.request-path': EndpointParametersRequestPath;
      'endpoint-parameters.request-query': EndpointParametersRequestQuery;
      'endpoint-sdk-methods.sdk-methods': EndpointSdkMethodsSdkMethods;
      'httpresponse-parameters.http-response-parameters': HttpresponseParametersHttpResponseParameters;
    }
  }
}
