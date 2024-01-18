/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use buck2_core::target::configured_target_label::ConfiguredTargetLabel;
use buck2_core::target::label::TargetLabel;

use crate::query::environment::NodeLabel;

impl NodeLabel for TargetLabel {}

impl NodeLabel for ConfiguredTargetLabel {}
