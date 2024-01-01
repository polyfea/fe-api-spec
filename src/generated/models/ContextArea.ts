/* tslint:disable */
/* eslint-disable */
/**
 * Polyfea Browser application
 * This is the OpenAPI definition for the Polyfea endpoint serving the context information to the browser client. The client is requesting context information from the backend typically  when approaching the `<polyfea-context>` element. The context information is then used to render the UI of the application. 
 *
 * The version of the OpenAPI document: v1alpha1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ElementSpec } from './ElementSpec';
import {
    ElementSpecFromJSON,
    ElementSpecFromJSONTyped,
    ElementSpecToJSON,
} from './ElementSpec';
import type { MicrofrontendSpec } from './MicrofrontendSpec';
import {
    MicrofrontendSpecFromJSON,
    MicrofrontendSpecFromJSONTyped,
    MicrofrontendSpecToJSON,
} from './MicrofrontendSpec';

/**
 * Elements to be inserted into the microfrontend context area.
 * The context area describes an area in the document flow which content is depending on the configuration of the system. For examples
 * the context area `top-level-applicartion` may be used to render the top level application tiles.
 * 
 * @export
 * @interface ContextArea
 */
export interface ContextArea {
    /**
     * The elements to be inserted into the context area. The elements are rendered in the order they are provided in the array.
     * 
     * @type {Array<ElementSpec>}
     * @memberof ContextArea
     */
    elements: Array<ElementSpec>;
    /**
     * The microfrontends referenced by any of the elements. Loading of microfrontend resources is triggered by the browser when the
     * element is rendered.
     * 
     * @type {{ [key: string]: MicrofrontendSpec; }}
     * @memberof ContextArea
     */
    microfrontends?: { [key: string]: MicrofrontendSpec; };
}

/**
 * Check if a given object implements the ContextArea interface.
 */
export function instanceOfContextArea(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "elements" in value;

    return isInstance;
}

export function ContextAreaFromJSON(json: any): ContextArea {
    return ContextAreaFromJSONTyped(json, false);
}

export function ContextAreaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContextArea {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elements': ((json['elements'] as Array<any>).map(ElementSpecFromJSON)),
        'microfrontends': !exists(json, 'microfrontends') ? undefined : (mapValues(json['microfrontends'], MicrofrontendSpecFromJSON)),
    };
}

export function ContextAreaToJSON(value?: ContextArea | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elements': ((value.elements as Array<any>).map(ElementSpecToJSON)),
        'microfrontends': value.microfrontends === undefined ? undefined : (mapValues(value.microfrontends, MicrofrontendSpecToJSON)),
    };
}

