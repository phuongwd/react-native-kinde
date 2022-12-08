/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateUserRequestProfile model module.
 * @module model/CreateUserRequestProfile
 * @version 1.1.0
 */
class CreateUserRequestProfile {
    /**
     * Constructs a new <code>CreateUserRequestProfile</code>.
     * @alias module:model/CreateUserRequestProfile
     */
    constructor() {
        CreateUserRequestProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>CreateUserRequestProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserRequestProfile} obj Optional instance to populate.
     * @return {module:model/CreateUserRequestProfile} The populated <code>CreateUserRequestProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserRequestProfile();

            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(
                    data['given_name'],
                    'String'
                );
            }
            if (data.hasOwnProperty('family_name')) {
                obj['family_name'] = ApiClient.convertToType(
                    data['family_name'],
                    'String'
                );
            }
        }
        return obj;
    }
}

/**
 * @member {String} given_name
 */
CreateUserRequestProfile.prototype['given_name'] = undefined;

/**
 * @member {String} family_name
 */
CreateUserRequestProfile.prototype['family_name'] = undefined;

export default CreateUserRequestProfile;