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

export interface EndpointParametersBodyParameters extends Schema.Component {
  collectionName: 'components_endpoint_parameters_body_parameters';
  info: {
    displayName: 'Body parameters';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    parameters: Attribute.Relation<
      'endpoint-parameters.body-parameters',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface EndpointParametersPathParameters extends Schema.Component {
  collectionName: 'components_endpoint_parameters_path_parameters';
  info: {
    displayName: 'Path parameters';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    parameters: Attribute.Relation<
      'endpoint-parameters.path-parameters',
      'oneToMany',
      'api::parameter.parameter'
    >;
  };
}

export interface EndpointParametersQueryParameters extends Schema.Component {
  collectionName: 'components_endpoint_parameters_query_parameters';
  info: {
    displayName: 'Query parameters';
    icon: 'bulletList';
  };
  attributes: {
    parameters: Attribute.Relation<
      'endpoint-parameters.query-parameters',
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
      'endpoint-parameters.body-parameters': EndpointParametersBodyParameters;
      'endpoint-parameters.path-parameters': EndpointParametersPathParameters;
      'endpoint-parameters.query-parameters': EndpointParametersQueryParameters;
      'endpoint-sdk-methods.sdk-methods': EndpointSdkMethodsSdkMethods;
      'httpresponse-parameters.http-response-parameters': HttpresponseParametersHttpResponseParameters;
    }
  }
}
