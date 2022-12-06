/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateUserRequestIdentitiesInnerDetails from './CreateUserRequestIdentitiesInnerDetails';

/**
 * The CreateUserRequestIdentitiesInner model module.
 * @module model/CreateUserRequestIdentitiesInner
 * @version 0.0.1
 */
class CreateUserRequestIdentitiesInner {
    /**
     * Constructs a new <code>CreateUserRequestIdentitiesInner</code>.
     * @alias module:model/CreateUserRequestIdentitiesInner
     */
    constructor() {
        CreateUserRequestIdentitiesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>CreateUserRequestIdentitiesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserRequestIdentitiesInner} obj Optional instance to populate.
     * @return {module:model/CreateUserRequestIdentitiesInner} The populated <code>CreateUserRequestIdentitiesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserRequestIdentitiesInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] =
                    CreateUserRequestIdentitiesInnerDetails.constructFromObject(
                        data['details']
                    );
            }
        }
        return obj;
    }
}

/**
 * @member {String} type
 */
CreateUserRequestIdentitiesInner.prototype['type'] = undefined;

/**
 * @member {module:model/CreateUserRequestIdentitiesInnerDetails} details
 */
CreateUserRequestIdentitiesInner.prototype['details'] = undefined;

export default CreateUserRequestIdentitiesInner;
