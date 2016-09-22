/*
 * Copyright 2010 Acuminous Ltd / Energized Work Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jslint node: true */
"use strict";

var SameLibraryScore = function(m1, m2) {

    this.value = m1.is_sibling(m2) ? 1 : 0;
    this.type = 'SameLibraryScore';

    this.compare = function(other) {
        return this.value - other.value;
    };

    this.equals = function(other) {
        if (!other) return false;
        return (this.type === other.type && this.value === other.value);
    };
};

module.exports = SameLibraryScore;